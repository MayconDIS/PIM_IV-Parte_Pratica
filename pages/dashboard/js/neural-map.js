// js/neural-map.js
// ==========================================
// 8. MOTOR GRÁFICO: MAPA NEURAL (OBSIDIAN VIEW)
// ==========================================
// Módulo separado seguindo Separation of Concerns.
// Depende das variáveis globais do app.js:
//   - nomeSalvo, userKey, meusDecks, srsData
//   - fasesDesbloqueadas, ordemFases
//   - abrirModal(), fecharModal()

let graphScale = 1;
let graphPanX = 0;
let graphPanY = 0;
let animationFrameId;
let _mapDraggedNode = null;

/**
 * Abre o modal do Mapa Neural e renderiza toda a teia.
 * Lê os dados de progresso do localStorage e gera nós/edges dinamicamente.
 */
function abrirMapaMental() {
    alert("Esta funcionalidade está em desenvolvimento e será disponibilizada no 4º semestre.");
    return;

    abrirModal('modalMapaMental');

    const modalContainer = document.getElementById('mapa-mental-body');
    const graphCanvas = document.getElementById('obsidian-canvas');
    graphCanvas.innerHTML = '';

    // ---------------------------------------------------------
    // 0. CARREGAR SAVE DATA DO MAPA (Local Storage)
    // ---------------------------------------------------------
    const mapSaveKey = userKey + 'map_state';
    const savedState = JSON.parse(localStorage.getItem(mapSaveKey)) || { nodes: {}, camera: null };

    // Restaurar a câmera ou centralizar se for a primeira vez
    if (savedState.camera) {
        graphScale = savedState.camera.scale;
        graphPanX = savedState.camera.panX;
        graphPanY = savedState.camera.panY;
    } else {
        graphScale = 1;
        graphPanX = (modalContainer.clientWidth / 2) - 2000;
        graphPanY = (modalContainer.clientHeight / 2) - 2000;
    }
    _atualizarCameraMapa(graphCanvas);

    const dictNodes = {};
    const listEdges = [];

    // ---------------------------------------------------------
    // A. GERAR DADOS (Lendo do Save ou Gerando Novos)
    // ---------------------------------------------------------

    // 1. Nó Central (Cérebro)
    let cx = 2000, cy = 2000;
    if (savedState.nodes['central']) {
        cx = savedState.nodes['central'].x;
        cy = savedState.nodes['central'].y;
    }

    const centralNodeData = {
        id: 'central', x: cx, y: cy,
        label: `Cérebro: ${nomeSalvo}`, color: 'var(--alura-purple)',
        size: 45, isCard: false
    };
    const centralElement = _criarNoVisual(centralNodeData, graphCanvas, modalContainer);
    graphCanvas.appendChild(centralElement);
    centralNodeData.domElement = centralElement;
    dictNodes['central'] = centralNodeData;

    // 2. Mapear Fases e Módulos
    const totalFases = ordemFases.length;
    ordemFases.forEach((faseId, index) => {
        const cartasDaFase = meusDecks[faseId] || [];
        const isFaseDesbloqueada = fasesDesbloqueadas.includes(faseId);

        let nodeX, nodeY, offX, offY;

        if (savedState.nodes[faseId]) {
            nodeX = savedState.nodes[faseId].x;
            nodeY = savedState.nodes[faseId].y;
            offX = savedState.nodes[faseId].offsetX;
            offY = savedState.nodes[faseId].offsetY;
        } else {
            const angle = (index / totalFases) * Math.PI * 2;
            const distance = Math.random() * 250 + 350;
            nodeX = cx + Math.cos(angle) * distance;
            nodeY = cy + Math.sin(angle) * distance;
            offX = nodeX - cx;
            offY = nodeY - cy;
        }

        let cartasFinalizadas = [];
        if (isFaseDesbloqueada) {
            cartasFinalizadas = cartasDaFase.filter(carta => {
                const infoProgresso = srsData[carta.frente];
                return infoProgresso && infoProgresso.rep > 0;
            });
        }

        const faseColor = isFaseDesbloqueada ? 'var(--alura-cyan)' : '#30363d';
        const faseSize = isFaseDesbloqueada ? 25 + (cartasFinalizadas.length * 0.5) : 15;

        const faseNodeData = {
            id: faseId, x: nodeX, y: nodeY,
            label: faseId.toUpperCase(), color: faseColor, size: faseSize,
            isCard: false, parentId: 'central', offsetX: offX, offsetY: offY
        };
        const faseElement = _criarNoVisual(faseNodeData, graphCanvas, modalContainer);
        graphCanvas.appendChild(faseElement);
        faseNodeData.domElement = faseElement;
        dictNodes[faseId] = faseNodeData;

        listEdges.push({ fromId: 'central', toId: faseId, opacity: isFaseDesbloqueada ? 0.3 : 0.05 });

        // Gerar os Flashcards (Sinapses Flutuantes)
        if (isFaseDesbloqueada && cartasFinalizadas.length > 0) {
            const limiteCartasVisuais = Math.min(cartasFinalizadas.length, 30);
            for (let i = 0; i < limiteCartasVisuais; i++) {
                const cardId = `${faseId}_card_${i}`;
                let cardX, cardY, cardOffX, cardOffY;

                if (savedState.nodes[cardId]) {
                    cardX = savedState.nodes[cardId].x;
                    cardY = savedState.nodes[cardId].y;
                    cardOffX = savedState.nodes[cardId].offsetX;
                    cardOffY = savedState.nodes[cardId].offsetY;
                } else {
                    const baseAngle = (i / limiteCartasVisuais) * Math.PI * 2;
                    const cardAngle = baseAngle + (Math.random() * 0.3 - 0.15);
                    const cardDistance = Math.random() * 80 + 120;
                    cardX = nodeX + Math.cos(cardAngle) * cardDistance;
                    cardY = nodeY + Math.sin(cardAngle) * cardDistance;
                    cardOffX = cardX - nodeX;
                    cardOffY = cardY - nodeY;
                }

                const cardColor = Math.random() > 0.5 ? 'var(--alura-green)' : 'var(--alura-blue)';

                const cardNodeData = {
                    id: cardId, x: cardX, y: cardY,
                    label: '', color: cardColor, size: 10,
                    isCard: true, cardData: cartasFinalizadas[i],
                    parentId: faseId, offsetX: cardOffX, offsetY: cardOffY
                };
                const cardElement = _criarNoVisual(cardNodeData, graphCanvas, modalContainer);
                graphCanvas.appendChild(cardElement);
                cardNodeData.domElement = cardElement;
                dictNodes[cardId] = cardNodeData;

                listEdges.push({ fromId: faseId, toId: cardId, opacity: 0.15 });
            }
        }
    });

    // 3. RENDERIZAR AS LINHAS (EDGES) DOM
    listEdges.forEach(edge => {
        const lineElement = document.createElement('div');
        lineElement.className = 'obsidian-edge';
        lineElement.style.backgroundColor = `rgba(139, 146, 165, ${edge.opacity})`;
        graphCanvas.appendChild(lineElement);
        edge.domElement = lineElement;
    });

    // ---------------------------------------------------------
    // B. FUNÇÕES INTERNAS
    // ---------------------------------------------------------
    function recalcularTeiaNeural() {
        listEdges.forEach(edge => {
            const sourceNode = dictNodes[edge.fromId];
            const targetNode = dictNodes[edge.toId];
            if (sourceNode && targetNode) {
                const deltaX = targetNode.x - sourceNode.x;
                const deltaY = targetNode.y - sourceNode.y;
                const lineLength = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
                const angleInDegrees = Math.atan2(deltaY, deltaX) * 180 / Math.PI;

                edge.domElement.style.width = `${lineLength}px`;
                edge.domElement.style.left = `${sourceNode.x}px`;
                edge.domElement.style.top = `${sourceNode.y}px`;
                edge.domElement.style.transform = `rotate(${angleInDegrees}deg)`;
            }
        });
    }
    recalcularTeiaNeural();

    function salvarEstadoMapa() {
        const estadoAtual = {
            camera: { scale: graphScale, panX: graphPanX, panY: graphPanY },
            nodes: {}
        };
        Object.values(dictNodes).forEach(n => {
            estadoAtual.nodes[n.id] = {
                x: n.x, y: n.y,
                offsetX: n.offsetX || 0, offsetY: n.offsetY || 0
            };
        });
        localStorage.setItem(mapSaveKey, JSON.stringify(estadoAtual));
    }
    salvarEstadoMapa();

    // ---------------------------------------------------------
    // C. MOTOR FÍSICO (SPRING PHYSICS / ELÁSTICO)
    // ---------------------------------------------------------
    function renderPhysicsLoop() {
        let needsUpdate = false;

        Object.values(dictNodes).forEach(node => {
            if (node.parentId && _mapDraggedNode !== node) {
                const parent = dictNodes[node.parentId];
                if (parent) {
                    const targetX = parent.x + node.offsetX;
                    const targetY = parent.y + node.offsetY;

                    const dx = targetX - node.x;
                    const dy = targetY - node.y;

                    if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
                        node.x += dx * 0.15;
                        node.y += dy * 0.15;

                        node.domElement.style.left = `${node.x}px`;
                        node.domElement.style.top = `${node.y}px`;
                        needsUpdate = true;
                    }
                }
            }
        });

        if (needsUpdate) recalcularTeiaNeural();
        animationFrameId = requestAnimationFrame(renderPhysicsLoop);
    }
    renderPhysicsLoop();

    // Desligar física ao fechar o modal
    const closeBtn = document.querySelector('#modalMapaMental .btn-close');
    if (closeBtn) {
        closeBtn.onclick = () => {
            cancelAnimationFrame(animationFrameId);
            fecharModal('modalMapaMental');
        };
    }

    // ---------------------------------------------------------
    // D. PAN & ZOOM
    // ---------------------------------------------------------
    let isPanningCamera = false;

    modalContainer.addEventListener('contextmenu', (event) => { event.preventDefault(); });

    modalContainer.addEventListener('mousedown', (event) => {
        if (event.target.classList.contains('obsidian-node')) return;
        isPanningCamera = true;
        modalContainer.style.cursor = 'grabbing';
        document.querySelectorAll('.mini-flashcard').forEach(card => card.remove());
    });

    function handleMouseMove(event) {
        if (_mapDraggedNode) {
            event.preventDefault();
            _mapDraggedNode.x += event.movementX / graphScale;
            _mapDraggedNode.y += event.movementY / graphScale;
            _mapDraggedNode.domElement.style.left = `${_mapDraggedNode.x}px`;
            _mapDraggedNode.domElement.style.top = `${_mapDraggedNode.y}px`;
            recalcularTeiaNeural();
            return;
        }

        if (isPanningCamera) {
            graphPanX += event.movementX;
            graphPanY += event.movementY;
            _atualizarCameraMapa(graphCanvas);
        }
    }

    function handleMouseUp() {
        if (_mapDraggedNode) {
            if (_mapDraggedNode.parentId) {
                const parent = dictNodes[_mapDraggedNode.parentId];
                if (parent) {
                    _mapDraggedNode.offsetX = _mapDraggedNode.x - parent.x;
                    _mapDraggedNode.offsetY = _mapDraggedNode.y - parent.y;
                }
            }
            _mapDraggedNode.domElement.style.cursor = 'grab';
            _mapDraggedNode = null;
            salvarEstadoMapa();
        }

        if (isPanningCamera) {
            isPanningCamera = false;
            salvarEstadoMapa();
        }

        modalContainer.style.cursor = 'grab';
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    function aplicarZoom(deltaZoom, originX, originY) {
        const targetX = (originX - graphPanX) / graphScale;
        const targetY = (originY - graphPanY) / graphScale;

        let newScale = graphScale + deltaZoom;
        if (newScale < 0.2) newScale = 0.2;
        if (newScale > 3.0) newScale = 3.0;

        graphPanX = originX - (targetX * newScale);
        graphPanY = originY - (targetY * newScale);

        graphScale = newScale;
        _atualizarCameraMapa(graphCanvas);
        salvarEstadoMapa();
    }

    modalContainer.addEventListener('wheel', (event) => {
        event.preventDefault();
        const rect = modalContainer.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const zoomDelta = event.deltaY * -0.0015;
        aplicarZoom(zoomDelta, mouseX, mouseY);
    });

    const btnZoomIn = document.getElementById('btn-zoom-in-map');
    const btnZoomOut = document.getElementById('btn-zoom-out-map');

    if (btnZoomIn) {
        btnZoomIn.onclick = () => {
            const rect = modalContainer.getBoundingClientRect();
            aplicarZoom(0.3, rect.width / 2, rect.height / 2);
        };
    }

    if (btnZoomOut) {
        btnZoomOut.onclick = () => {
            const rect = modalContainer.getBoundingClientRect();
            aplicarZoom(-0.3, rect.width / 2, rect.height / 2);
        };
    }
}

// ==========================================
// FUNÇÕES AUXILIARES (escopo global, definidas antes do uso)
// ==========================================

/**
 * Atualiza a posição e escala do canvas do mapa neural.
 * @param {HTMLElement} canvas - O elemento #obsidian-canvas.
 */
function _atualizarCameraMapa(canvas) {
    if (canvas) {
        canvas.style.transform = `translate(${graphPanX}px, ${graphPanY}px) scale(${graphScale})`;
    }
}

/**
 * Factory de nós visuais do mapa neural.
 * Cria um elemento DOM representando um nó (fase, flashcard ou cérebro).
 * @param {Object} nodeData - Dados do nó (id, x, y, label, color, size, isCard, cardData).
 * @param {HTMLElement} canvas - O canvas onde os elementos são adicionados.
 * @param {HTMLElement} containerEl - O container do modal (para cursor).
 * @returns {HTMLElement} O elemento DOM do nó.
 */
function _criarNoVisual(nodeData, canvas, containerEl) {
    const nodeElement = document.createElement('div');
    nodeElement.className = 'obsidian-node';
    nodeElement.style.width = `${nodeData.size}px`;
    nodeElement.style.height = `${nodeData.size}px`;
    nodeElement.style.backgroundColor = nodeData.color;
    nodeElement.style.boxShadow = `0 0 ${nodeData.size * 1.5}px ${nodeData.color}`;
    nodeElement.style.left = `${nodeData.x}px`;
    nodeElement.style.top = `${nodeData.y}px`;

    if (nodeData.label) {
        const labelElement = document.createElement('span');
        labelElement.className = 'label tech-font';
        labelElement.innerText = nodeData.label;
        nodeElement.appendChild(labelElement);
    }

    // Pulsar (Efeito de onda neural)
    nodeElement.addEventListener('mousedown', () => {
        const rippleElement = document.createElement('div');
        rippleElement.className = 'neural-pulse';
        rippleElement.style.width = `${nodeData.size * 2}px`;
        rippleElement.style.height = `${nodeData.size * 2}px`;
        rippleElement.style.left = `${nodeData.x}px`;
        rippleElement.style.top = `${nodeData.y}px`;
        rippleElement.style.borderColor = nodeData.color;
        canvas.appendChild(rippleElement);
        setTimeout(() => rippleElement.remove(), 800);
    });

    // Ler Flashcard (clique em sinapse)
    if (nodeData.isCard) {
        nodeElement.addEventListener('click', (event) => {
            event.stopPropagation();
            document.querySelectorAll('.mini-flashcard').forEach(el => el.remove());

            const flashcardArticle = document.createElement('article');
            flashcardArticle.className = 'mini-flashcard';
            flashcardArticle.style.left = `${nodeData.x + (nodeData.size / 2) + 10}px`;
            flashcardArticle.style.top = `${nodeData.y - 40}px`;

            flashcardArticle.innerHTML = `
                <div><h4>${nodeData.id.split('_')[0].toUpperCase()}</h4></div>
                <div>
                    <p><strong>P:</strong> ${nodeData.cardData.frente}</p>
                    <hr style="border: 1px dashed #30363d; margin: 8px 0;">
                    <p style="color: var(--alura-green);"><strong>R:</strong> ${nodeData.cardData.verso}</p>
                </div>
            `;
            canvas.appendChild(flashcardArticle);
        });
    }

    // Arrastar Nó (Drag)
    nodeElement.addEventListener('mousedown', (event) => {
        event.stopPropagation();
        _mapDraggedNode = nodeData;
        nodeElement.style.cursor = 'grabbing';
        containerEl.style.cursor = 'default';
    });

    return nodeElement;
}
