// Функция для подсчёта фотографий
function countPhotos() {
    let photos = document.querySelectorAll('.image-card');
    let counter = document.getElementById('image-counter');
    
    if (counter) {
        counter.textContent = photos.length;
    }

    console.log('Найдено фотографий:', photos.length);
}

// Функция для работы с лайками
function setupLikes() {
    let likeButtons = document.querySelectorAll('.like-btn');
    let totalLikesElement = document.getElementById('total-likes');
    let totalLikes = 0;

    // Для каждой кнопки лайка
    likeButtons.forEach(function(button) {

    // При клике на кнопку
    button.addEventListener('click', function() {
        let likesSpan = this.querySelector('.like-count');
        let currentLikes = parseInt(likesSpan.textContent);

            if (this.classList.contains('liked')) {
                // Убираем лайк
                currentLikes--;
                totalLikes--;
                this.classList.remove('liked');
            } else {
                // Добавляем лайк
                currentLikes++;
                totalLikes++;
                this.classList.add('liked');
            }

            // Обновляем счётчики
            likesSpan.textContent = currentLikes;
            totalLikesElement.textContent = totalLikes;

            // Анимация
            this.style.transform = 'scale(1.2)';
            setTimeout(() => {
            this.style.transform = 'scale(1)';
            }, 300);

            console.log('Лайков всего:', totalLikes);
        });
    });
}


function setupForm() {
    const form = document.getElementById('feedback-form');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Получение
            const name = document.getElementById('name').value;
            const topic = document.getElementById('topic').value;
            
            // Имитация отправки
            const btn = form.querySelector('.submit-btn');
            const originalText = btn.textContent;
            
            btn.textContent = 'Отправка...';
            btn.style.background = '#999';
            
            setTimeout(() => {
                alert(`Сообщение отправлено`);
                
                form.reset();
                
                btn.textContent = originalText;
                btn.style.background = '#413D34';
            }, 1500);
        });
    }
}


document.addEventListener('DOMContentLoaded', function() {
console.log('Галерея загружена!');
countPhotos();
setupLikes();
setupForm();

// JavaScript работает
setTimeout(function() {
console.log('✅ JavaScript работает правильно!');
}, 1000);
});


