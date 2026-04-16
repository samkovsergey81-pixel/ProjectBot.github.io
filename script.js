// База знаний бота
const knowledgeBase = {
    'привет': 'Здравствуйте! Я демонстрационный бот для защиты проекта. Задайте мне вопрос!',
    'здравствуй': 'Здравствуйте! Чем могу помочь?',
    'что такое бот': 'Бот — это программа, которая автоматически выполняет заданные действия по определённому алгоритму. В моём случае — я отвечаю на вопросы по ключевым словам.',
    'виды ботов': 'Существует несколько видов ботов:<br>• <strong>Чат-боты</strong> — для общения и поддержки<br>• <strong>Торговые боты</strong> — для автоматической торговли<br>• <strong>Поисковые роботы</strong> — индексируют сайты<br>• <strong>Игровые боты</strong> — имитируют игроков<br>• <strong>Голосовые ассистенты</strong> — Siri, Алиса',
    'эффективность': 'Боты эффективны, потому что:<br>• Работают <strong>24/7</strong> без перерывов<br>• Обрабатывают <strong>тысячи запросов</strong> одновременно<br>• <strong>Не допускают ошибок</strong> в рутинных задачах<br>• <strong>Экономят до 80% времени</strong> сотрудников',
    'создать бота': 'Чтобы создать простого бота, нужно:<br>1. Выбрать платформу (Telegram, Discord, веб)<br>2. Написать код (Python, JavaScript)<br>3. Настроить логику ответов<br>4. Разместить на сервере<br><br>Я создан на HTML, CSS и JavaScript и работаю прямо в браузере!',
    'кто ты': 'Я — демонстрационный чат-бот, созданный для защиты проекта на тему "Что такое бот? Создание и эффективность применения".',
    'помощь': 'Я могу ответить на вопросы:<br>• Что такое бот?<br>• Виды ботов<br>• Эффективность применения<br>• Как создать бота<br>Просто напишите ключевое слово!'
};

// DOM элементы
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Функция добавления сообщения в чат
function addMessage(text, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.innerHTML = text; // Используем innerHTML для поддержки <br>
    
    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);
    
    // Автопрокрутка вниз
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Функция поиска ответа в базе знаний
function findAnswer(question) {
    const lowerQuestion = question.toLowerCase();
    
    // Поиск по ключевым словам
    for (const [key, answer] of Object.entries(knowledgeBase)) {
        if (lowerQuestion.includes(key)) {
            return answer;
        }
    }
    
    // Если ничего не найдено
    return 'Извините, я не знаю ответа на этот вопрос. Попробуйте спросить про "виды ботов", "эффективность" или "создать бота".';
}

// Функция отправки сообщения
function sendMessage() {
    const text = userInput.value.trim();
    
    if (text === '') return;
    
    // Добавляем сообщение пользователя
    addMessage(text, true);
    
    // Очищаем поле ввода
    userInput.value = '';
    
    // Имитация "печатания" бота (небольшая задержка)
    setTimeout(() => {
        const answer = findAnswer(text);
        addMessage(answer, false);
    }, 500);
}

// Обработчики событий
sendBtn.addEventListener('click', sendMessage);

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Фокус на поле ввода при загрузке
userInput.focus();
