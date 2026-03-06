//  GIFs por rank - Projeto DIO
        const personagensPorRank = {
            "Ferro": "https://64.media.tumblr.com/2fba08dc4137cecc76c34fa18b4f2c8b/tumblr_n0uegx9Ou81r4zvxvo1_250.gif",
            "Bronze": "https://cdnb.artstation.com/p/assets/images/images/064/526/343/original/grant-king-knight-idle.gif?1688124262",
            "Prata": "https://orig00.deviantart.net/6aeb/f/2014/242/d/d/roman_archer_shoot__animation__by_six__down-d7xbxv9.gif",
            "Ouro": "https://static.wixstatic.com/media/5287a4_0dfd570a59dc49e1bf602ece7d0b7eba~mv2.gif",
            "Platina": "https://64.media.tumblr.com/3e8f5c83b0644b96e252be8fa5774470/tumblr_od9xizb2bh1qkpz2go1_640.gif",
            "Ascendente": "https://i.pinimg.com/originals/3f/17/34/3f173486753fa3dca648e290d8015cc9.gif",
            "Imortal": "https://daniloenju.github.io/img/projects/Animation/Mage.gif",
            "Radiante": "https://opengameart.org/sites/default/files/forum-attachments/giphy.gif"
        };

        function classificarHeroi() {
            const nome = document.getElementById('nome').value.trim();
            const xp = parseInt(document.getElementById('xp').value);
            
            // Validação
            if (!nome || isNaN(xp) || xp < 0) {
                alert('⚠️ Por favor, preencha todos os campos corretamente!');
                return;
            }

            let nivel = "";
            
            // Estrutura de decisão - Projeto DIO
            if (xp < 1000) {
                nivel = "Ferro";
            } else if (xp <= 2000) {
                nivel = "Bronze";
            } else if (xp <= 5000) {
                nivel = "Prata";
            } else if (xp <= 7000) {
                nivel = "Ouro";
            } else if (xp <= 8000) {
                nivel = "Platina";
            } else if (xp <= 9000) {
                nivel = "Ascendente";
            } else if (xp <= 10000) {
                nivel = "Imortal";
            } else {
                nivel = "Radiante";
            }

            // Atualizar GIF do personagem - Projeto DIO
            const gifUrl = personagensPorRank[nivel];
            document.getElementById('personagemGif').src = gifUrl;

            // Exibir resultado - Projeto DIO
            document.getElementById('nomeResultado').textContent = nome;
            document.getElementById('nivelResultado').textContent = nivel;
            document.getElementById('xpResultado').textContent = xp.toLocaleString('pt-BR');
            document.getElementById('resultado').style.display = 'block';
            
            // Log no console
            console.log(`Herói: ${nome} | XP: ${xp} | Nível: ${nivel}`);
        }
        
        // Permitir Enter para classificar
        document.getElementById('xp').addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                classificarHeroi();
            }
        });