document.addEventListener('DOMContentLoaded', () => {
    const receitasContainer = document.querySelector('.container-receitas');

    // Array de exemplo de receitas
    const receitas = [
        {
            id: 1,
            nome: 'Bolo de Chocolate',
            imagem: 'https://via.placeholder.com/300x200/FF5733/FFFFFF?text=Bolo+Chocolate', // Substitua por imagens reais
            descricao: 'Um delicioso bolo de chocolate molhadinho e fácil de fazer.',
            ingredientes: [
                '2 xícaras de farinha de trigo',
                '1 xícara de chocolate em pó',
                '2 xícaras de açúcar',
                '1 xícara de água quente',
                '1/2 xícara de óleo',
                '4 ovos',
                '1 colher de sopa de fermento em pó'
            ],
            modoPreparo: [
                'Pré-aqueça o forno a 180°C.',
                'Em uma tigela, misture a farinha, chocolate em pó e açúcar.',
                'Adicione a água quente, óleo e ovos, misturando bem.',
                'Por último, adicione o fermento em pó.',
                'Despeje em uma forma untada e enfarinhada.',
                'Asse por cerca de 40 minutos.'
            ]
        },
        {
            id: 2,
            nome: 'Frango Assado com Batatas',
            imagem: 'https://via.placeholder.com/300x200/33FF57/FFFFFF?text=Frango+Assado',
            descricao: 'Um frango suculento e batatas crocantes, perfeito para o almoço de domingo.',
            ingredientes: [
                '1 frango inteiro',
                '500g de batatas',
                'Alho, sal, pimenta do reino a gosto',
                'Azeite',
                'Alecrim'
            ],
            modoPreparo: [
                'Tempere o frango com alho, sal e pimenta.',
                'Corte as batatas em cubos grandes.',
                'Disponha o frango e as batatas em uma assadeira.',
                'Regue com azeite e adicione alecrim.',
                'Asse em forno pré-aquecido a 200°C por cerca de 1 hora e 30 minutos.'
            ]
        },
        {
            id: 3,
            nome: 'Salada Colorida',
            imagem: 'https://via.placeholder.com/300x200/3357FF/FFFFFF?text=Salada+Colorida',
            descricao: 'Uma salada refrescante e cheia de nutrientes para um jantar leve.',
            ingredientes: [
                'Alface, tomate, pepino',
                'Cenoura ralada',
                'Milho, ervilha',
                'Azeite, vinagre, sal e pimenta'
            ],
            modoPreparo: [
                'Lave bem todos os vegetais.',
                'Corte o alface, tomate e pepino.',
                'Misture todos os ingredientes em uma tigela grande.',
                'Tempere com azeite, vinagre, sal e pimenta a gosto.'
            ]
        }
    ];

    // Função para criar o card de cada receita
    function criarCardReceita(receita) {
        const card = document.createElement('div');
        card.classList.add('card-receita');
        card.innerHTML = `
            <img src="${receita.imagem}" alt="${receita.nome}">
            <h3>${receita.nome}</h3>
            <p>${receita.descricao}</p>
            <button class="btn-ver-receita" data-id="${receita.id}">Ver Receita</button>
        `;
        return card;
    }

    // Carregar as receitas na página
    function carregarReceitas() {
        receitas.forEach(receita => {
            receitasContainer.appendChild(criarCardReceita(receita));
        });
    }

    // Exibir detalhes da receita (você pode expandir isso para um modal ou nova página)
    receitasContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-ver-receita')) {
            const receitaId = parseInt(event.target.dataset.id);
            const receitaSelecionada = receitas.find(r => r.id === receitaId);
            if (receitaSelecionada) {
                alert(`Receita: ${receitaSelecionada.nome}\n\nIngredientes:\n${receitaSelecionada.ingredientes.join('\n')}\n\nModo de Preparo:\n${receitaSelecionada.modoPreparo.join('\n')}`);
                // Aqui você pode implementar um modal ou redirecionar para uma página de detalhes da receita
            }
        }
    });

    carregarReceitas();

    // Lidar com o envio do formulário de contato (exemplo simples)
    const formContato = document.querySelector('#contato form');
    if (formContato) {
        formContato.addEventListener('submit', (event) => {
            event.preventDefault(); // Evita o recarregamento da página
            alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
            formContato.reset(); // Limpa o formulário
        });
    }
});