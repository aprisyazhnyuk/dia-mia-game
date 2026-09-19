const screens = {
  start: document.getElementById("start-screen"),
  story: document.getElementById("story-screen"),
  battle: document.getElementById("battle-screen"),
  victory: document.getElementById("victory-screen"),
};

const storyTitle = document.getElementById("story-title");
const storyText = document.getElementById("story-text");
const storyNextButton = document.getElementById("story-next-button");

const diaHpText = document.getElementById("dia-hp-text");
const diaHpFill = document.getElementById("dia-hp-fill");
const diaImage = document.getElementById("dia-image");
const diaFloatingText = document.getElementById("dia-floating-text");

const enemyName = document.getElementById("enemy-name");
const enemyHpText = document.getElementById("enemy-hp-text");
const enemyHpFill = document.getElementById("enemy-hp-fill");
const enemyImage = document.getElementById("enemy-image");
const enemyFloatingText = document.getElementById("enemy-floating-text");

const battleFlash = document.getElementById("battle-flash");

const aveLight = document.getElementById("ave-light");

const speechBubble = document.getElementById("speech-bubble");
const lunaCatEffect = document.getElementById("luna-cat-effect");

const battleLog = document.getElementById("battle-log");
const turnIndicator = document.getElementById("turn-indicator");
const actionsContainer = document.getElementById("actions");
const actionButtons = document.querySelectorAll(".action-button");

const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");

const victoryScreen = document.getElementById("victory-screen");

const chapters = [
  {
    id: "bolyachka",
    title: "Глава 1. Болячка",
    background: "assets/backgrounds/bolyachka-bg.png",
    intro: [
      "Ди проснулась и сразу поняла: где-то рядом завелась Болячка.",
      "Болячка была маленькая, но вела себя так, будто снимает организм в долгосрочную аренду.",
      "Ди вздохнула. День начинался подозрительно RPG-шно."
    ],
    enemy: {
      name: "Болячка",
      maxHp: 60,
      image: "assets/enemies/bolyachka.png",
      attacks: [
        {
          name: "Ну я просто полежу рядом",
          damageMin: 5,
          damageMax: 9,
          text: "Болячка использует «Ну я просто полежу рядом». Это раздражает сильнее, чем должно."
        },
        {
          name: "Странное першение",
          damageMin: 6,
          damageMax: 11,
          text: "Болячка использует «Странное першение». Организм делает вид, что так и надо."
        },
        {
          name: "Минус энергия",
          damageMin: 4,
          damageMax: 12,
          text: "Болячка использует «Минус энергия». Где-то грустно падает одна продуктивность."
        }
      ]
    },
    victory: [
      "Болячка была побеждена чаем, пледом и необъяснимой харизмой Ди.",
      "Ди проверила состояние организма. Организм официально отказался комментировать."
    ]
  },

  {
    id: "anxiety",
    title: "Глава 2. Тревожность",
    background: "assets/backgrounds/anxiety-bg.png",
    intro: [
      "Ди сделала пару шагов по дню и услышала тихое: «а вдруг?»",
      "Из угла выползла Тревожность. Она была маленькая, тёмная и слишком хорошо подготовленная.",
      "Ди посмотрела на неё спокойно. Это уже нанесло Тревожности психологический урон."
    ],
    enemy: {
      name: "Тревожность",
      maxHp: 75,
      image: "assets/enemies/anxiety.png",
      attacks: [
        {
          name: "А если всё плохо?",
          damageMin: 7,
          damageMax: 12,
          text: "Тревожность использует «А если всё плохо?». Аргументов нет, но атмосфера испорчена."
        },
        {
          name: "Список невозможных сценариев",
          damageMin: 8,
          damageMax: 13,
          text: "Тревожность достаёт список невозможных сценариев. Почему-то он на 47 страниц."
        },
        {
          name: "Неловкое воспоминание",
          damageMin: 6,
          damageMax: 14,
          text: "Тревожность использует «Неловкое воспоминание». Совершенно запрещённый приём."
        }
      ]
    },
    victory: [
      "Тревожность попыталась объяснить свою позицию, но Ди уже включила режим «не сегодня».",
      "Тёмный комочек отступил в угол и начал тревожиться о своём поражении."
    ]
  },

  {
    id: "work",
    title: "Глава 3. Работа-Поебота",
    background: "assets/backgrounds/work-bg.png",
    intro: [
      "День почти притворился нормальным, но тут открылся календарь.",
      "Из календаря вылезла Работа-Поебота — монстр из созвонов, табличек и задач «на пять минут».",
      "Ди поняла: сейчас будет корпоративный фэнтези-хоррор."
    ],
    enemy: {
      name: "Работа-Поебота",
      maxHp: 95,
      image: "assets/enemies/work.png",
      attacks: [
        {
          name: "Созвон на 18:30",
          damageMin: 9,
          damageMax: 15,
          text: "Работа-Поебота использует «Созвон на 18:30». Это незаконно, но календарь согласен."
        },
        {
          name: "Срочно, но не горит",
          damageMin: 8,
          damageMax: 16,
          text: "Работа-Поебота использует «Срочно, но не горит». Фраза противоречит сама себе, но урон реален."
        },
        {
          name: "Маленькая правочка",
          damageMin: 10,
          damageMax: 17,
          text: "Работа-Поебота использует «Маленькая правочка». Где-то открывается портал в ад."
        }
      ]
    },
    victory: [
      "Работа-Поебота была закрыта, перенесена, забыта и случайно победилась сама.",
      "Ди сохранила файл как vse_mogut_idti_nahuy.xlsx и пошла дальше."
    ]
  },

  {
    id: "pms",
    title: "Глава 4. ПМС",
    background: "assets/backgrounds/pms-bg.png",
    intro: [
      "Небо потемнело. Воздух стал густым. Где-то драматично открылась шоколадка.",
      "Появился ПМС — погодный фронт с характером, HP и претензиями к реальности.",
      "Ди не испугалась. Ди надела шлем"
    ],
    enemy: {
      name: "ПМС",
      maxHp: 110,
      image: "assets/enemies/pms.png",
      attacks: [
        {
          name: "Хочу сладкое, но не это",
          damageMin: 10,
          damageMax: 20,
          text: "ПМС использует «Хочу сладкое, но не это». Ситуация становится философской."
        },
        {
          name: "Всё бесит",
          damageMin: 8,
          damageMax: 22,
          text: "ПМС использует «Всё бесит». Универсальная атака по площади."
        },
        {
          name: "Лёгкая драматизация",
          damageMin: 12,
          damageMax: 19,
          text: "ПМС использует «Лёгкая драматизация». На самом деле она не лёгкая."
        }
      ]
    },
    victory: [
      "ПМС отступил.",
      "Ди получила +10 к принятию реальности и +1 к праву лежать красиво."
    ]
  },

  {
    id: "final",
    title: "Глава 5. Большая Жизненная Хрень",
    background: "assets/backgrounds/final-bg.png",
    intro: [
      "Когда казалось, что всё уже позади, пространство подозрительно зашевелилось.",
      "Из всех мелких проблем собралась она — Большая Жизненная Хрень.",
      "Ди поправила волосы. Финальный босс понял, что, возможно, зря пришёл."
    ],
    enemy: {
      name: "Большая Жизненная Хрень",
      maxHp: 140,
      image: "assets/enemies/final-boss.png",
      attacks: [
        {
          name: "Всё сразу",
          damageMin: 12,
          damageMax: 22,
          text: "Большая Жизненная Хрень использует «Всё сразу». Нечестно, но тематически уместно."
        },
        {
          name: "Неожиданный поворот",
          damageMin: 10,
          damageMax: 24,
          text: "Большая Жизненная Хрень использует «Неожиданный поворот». Сюжет требует напряжения."
        },
        {
          name: "Ну и что теперь?",
          damageMin: 14,
          damageMax: 21,
          text: "Большая Жизненная Хрень использует «Ну и что теперь?». Сложный вопрос, слабая реализация."
        }
      ]
    },
    victory: [
      "Большая Жизненная Хрень была поставлена на место.",
      "Потому что Ди — это не просто персонаж. Это состояние души."
    ]
  }
];

const diaBattlePhrases = [
  "Схуяли?",
  "Да потому что это пиздец какой-то, ни в какие ворота, блять, не лезет!",
  "Давно пальцы веером, заюш?"
];

function playAveLight() {
  aveLight.classList.remove("show");

  void aveLight.offsetWidth;

  aveLight.classList.add("show");
}

const player = {
  name: "Диа Миа",
  maxHp: 100,
  hp: 100,
  shield: false,
};

let currentChapterIndex = 0;
let currentStoryIndex = 0;
let currentVictoryIndex = 0;
let enemy = null;
let inputLocked = false;
let isVictorySequence = false;
let finalFinisherReady = false;
let finalFinisherUsed = false;

function getCurrentChapter() {
  return chapters[currentChapterIndex];
}

function showScreen(screenName) {
  Object.values(screens).forEach((screen) => {
    screen.classList.remove("active");
  });

  screens[screenName].classList.add("active");
}

function setChapterBackground() {
  const chapter = getCurrentChapter();
  const gameShell = document.querySelector(".game-shell");

  gameShell.style.setProperty("--chapter-background", `url("${chapter.background}")`);
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateHpUi() {
  const playerHpPercent = Math.max(0, player.hp / player.maxHp * 100);
  const enemyHpPercent = Math.max(0, enemy.hp / enemy.maxHp * 100);

  diaHpText.textContent = `${player.hp} / ${player.maxHp}`;
  enemyHpText.textContent = `${enemy.hp} / ${enemy.maxHp}`;

  diaHpFill.style.width = `${playerHpPercent}%`;
  enemyHpFill.style.width = `${enemyHpPercent}%`;
}

function setBattleLog(text) {
  battleLog.textContent = text;
}

function animateHit(element) {
  element.classList.remove("shake", "hit-flash");

  void element.offsetWidth;

  element.classList.add("shake", "hit-flash");
}

function resetEnemyAnimation() {
  enemyImage.classList.remove("enemy-defeated");
}

function playEnemyDefeatAnimation() {
  enemyImage.classList.remove("shake", "hit-flash", "enemy-defeated");

  void enemyImage.offsetWidth;

  enemyImage.classList.add("enemy-defeated");
}

function showFloatingText(element, text, type) {
  element.classList.remove("damage-text", "heal-text", "ultimate-text");

  void element.offsetWidth;

  element.textContent = text;
  element.classList.add(type);
}

function flashScreen(type) {
  battleFlash.classList.remove("damage", "ultimate");

  void battleFlash.offsetWidth;

  battleFlash.classList.add(type);
}

function damageEnemy(amount) {
  enemy.hp = Math.max(0, enemy.hp - amount);
  animateHit(enemyImage);
  showFloatingText(enemyFloatingText, `-${amount}`, "damage-text");
}

function showSpeechBubble() {
  const phrase = diaBattlePhrases[randomInt(0, diaBattlePhrases.length - 1)];

  speechBubble.classList.remove("show");

  void speechBubble.offsetWidth;

  speechBubble.textContent = phrase;
  speechBubble.classList.add("show");
}

function showLunaCat() {
  lunaCatEffect.classList.remove("show");

  void lunaCatEffect.offsetWidth;

  lunaCatEffect.classList.add("show");
}

function healPlayer(amount) {
  player.hp = Math.min(player.maxHp, player.hp + amount);
  showFloatingText(diaFloatingText, `+${amount}`, "heal-text");
}

function damagePlayer(amount) {
  player.hp = Math.max(0, player.hp - amount);
  animateHit(diaImage);
  showFloatingText(diaFloatingText, `-${amount}`, "damage-text");
  flashScreen("damage");
}

function ultimateEnemyDamage(amount) {
  enemy.hp = Math.max(0, enemy.hp - amount);
  animateHit(enemyImage);
  showFloatingText(enemyFloatingText, `-${amount}`, "ultimate-text");
  flashScreen("ultimate");
}

function setActionsEnabled(isEnabled) {
  const isFinisherMode = finalFinisherReady && !finalFinisherUsed;

  actionButtons.forEach((button) => {
    if (isFinisherMode) {
      button.disabled = button.dataset.action !== "ave";
    } else {
      button.disabled = !isEnabled;
    }
  });

  actionsContainer.classList.toggle("disabled", !isEnabled && !isFinisherMode);

  if (isFinisherMode) {
    turnIndicator.textContent = "Финальный приём";
    turnIndicator.classList.remove("enemy-turn");
    return;
  }

  if (isEnabled) {
    turnIndicator.textContent = "Ход Ди";
    turnIndicator.classList.remove("enemy-turn");
  } else {
    turnIndicator.textContent = "Ход врага";
    turnIndicator.classList.add("enemy-turn");
  }
}

function startGame() {
  currentChapterIndex = 0;
  startChapter();
}

function startChapter() {
  const chapter = getCurrentChapter();

  setChapterBackground();

  currentStoryIndex = 0;
  currentVictoryIndex = 0;
  isVictorySequence = false;
  finalFinisherReady = false;
  finalFinisherUsed = false;

  player.hp = player.maxHp;
  player.shield = false;

  enemy = {
    name: chapter.enemy.name,
    maxHp: chapter.enemy.maxHp,
    hp: chapter.enemy.maxHp,
  };

  storyTitle.textContent = chapter.title;
  storyText.textContent = chapter.intro[currentStoryIndex];
  storyNextButton.textContent = "Дальше";

  showScreen("story");
}

function continueStory() {
  const chapter = getCurrentChapter();

  if (isVictorySequence) {
    continueVictoryStory();
    return;
  }

  currentStoryIndex += 1;

  if (currentStoryIndex >= chapter.intro.length) {
    startBattle();
    return;
  }

  storyText.textContent = chapter.intro[currentStoryIndex];
}

function startBattle() {
  const chapter = getCurrentChapter();

  enemyName.textContent = enemy.name;
  enemyImage.src = chapter.enemy.image;

  resetEnemyAnimation();

  updateHpUi();
  updateFinalAbilityVisibility();
  setActionsEnabled(true);

  setBattleLog(`${enemy.name} появляется. Кажется, у неё есть претензии к текущему дню.`);

  showScreen("battle");
}

function playerAction(actionType) {
  if (inputLocked) {
    return;
  }

  inputLocked = true;
  setActionsEnabled(false);

  let resultText = "";

  if (actionType === "word") {
    const damage = randomInt(14, 20);

    showSpeechBubble();
    damageEnemy(damage);

    resultText = `Ди использует «Бойкое словцо». ${enemy.name} получает ${damage} урона.`;
  }

  if (actionType === "cute") {
    let damage = randomInt(22, 34);
    const isCritical = Math.random() < 0.25;

    if (isCritical) {
      damage += 12;
    }

    damageEnemy(damage);

    resultText = isCritical
      ? `Ди использует «Критический урон милотой». Критический успех! ${enemy.name} получает ${damage} урона и теряет моральное право существовать.`
      : `Ди использует «Критический урон милотой». ${enemy.name} получает ${damage} урона очаровательной угрозой.`;
  }

  if (actionType === "core") {
    const heal = randomInt(10, 18);

    healPlayer(heal);
    player.shield = true;

    resultText = `Ди активирует «Внутренний стержень». Восстановлено ${heal} HP. Следующий удар будет слабее, потому что миру отказано в письменной форме.`;
  }

  if (actionType === "moon") {
    showLunaCat();

    const moonRoll = randomInt(1, 4);

    if (moonRoll === 1) {
      const damage = randomInt(16, 28);
      damageEnemy(damage);
      resultText = `Ди использует «Фаза Луны». Никто не понял, что произошло, но ${enemy.name} получает ${damage} урона.`;
    }

    if (moonRoll === 2) {
      const heal = randomInt(14, 24);
      healPlayer(heal);
      resultText = `Ди использует «Фаза Луны». Луна одобрительно молчит. Ди восстанавливает ${heal} HP.`;
    }

    if (moonRoll === 3) {
      const damage = randomInt(8, 16);
      const heal = randomInt(8, 16);

      damageEnemy(damage);
      healPlayer(heal);

      resultText = `Ди использует «Фаза Луны». ${enemy.name} получает ${damage} урона, Ди восстанавливает ${heal} HP. Астрология сработала, но мы не будем это обсуждать.`;
    }

    if (moonRoll === 4) {
      resultText = "Ди использует «Фаза Луны». Ничего не произошло, но стало красивее. Это тоже важно.";
    }
  }

  if (actionType === "ave") {
    if (!finalFinisherReady || finalFinisherUsed) {
      inputLocked = false;
      setActionsEnabled(true);
      return;
    }

    finalFinisherUsed = true;
    updateFinalAbilityVisibility();

    const damage = randomInt(50, 75);

    playAveLight();
    ultimateEnemyDamage(damage);

    resultText = `Ди использует «Ave Dia Mia». Экран заполняется белым светом, реальность делает шаг назад, а ${enemy.name} окончательно теряет право спорить.`;
  }

  updateHpUi();
  setBattleLog(resultText);

  if (enemy.hp <= 0) {
    const isFinalChapter = getCurrentChapter().id === "final";

    if (isFinalChapter && actionType !== "ave") {
      enterFinalFinisherMode();
      return;
    }

    if (isFinalChapter && actionType === "ave") {
      setBattleLog(
        "Большая Жизненная Хрень пошатнулась, попыталась сохранить достоинство и драматично упала за пределы экрана."
      );

      setTimeout(() => {
        playEnemyDefeatAnimation();
      }, 900);

      setTimeout(startVictoryStory, 2600);
      return;
    }

    playEnemyDefeatAnimation();
    setBattleLog(`${enemy.name} пошатнулась и с позором падает за пределы экрана.`);

    setTimeout(startVictoryStory, 1300);
    return;
  }

  setTimeout(() => {
    setBattleLog(`${enemy.name} готовит ответный ход...`);
  }, 700);

  setTimeout(enemyTurn, 1300);
}

function enemyTurn() {
  const chapter = getCurrentChapter();
  const attack = chapter.enemy.attacks[randomInt(0, chapter.enemy.attacks.length - 1)];

  let damage = randomInt(attack.damageMin, attack.damageMax);

  if (player.shield) {
    damage = Math.floor(damage / 2);
    player.shield = false;
  }

  damagePlayer(damage);
  updateHpUi();

  setBattleLog(`${attack.text} Ди получает ${damage} урона.`);

  if (player.hp <= 0) {
    setTimeout(() => {
      player.hp = 35;
      updateHpUi();

      setBattleLog(
        "Ди драматично легла на диван. Через 7 секунд внутренний стержень восстановился. Бой продолжается."
      );

      inputLocked = false;
      setActionsEnabled(true);
    }, 1300);

    return;
  }

  setTimeout(() => {
    inputLocked = false;
    setActionsEnabled(true);
  }, 800);
}

function startVictoryStory() {
  const chapter = getCurrentChapter();

  isVictorySequence = true;
  currentVictoryIndex = 0;

  storyTitle.textContent = "Победа";
  storyText.textContent = chapter.victory[currentVictoryIndex];

  if (currentChapterIndex === chapters.length - 1) {
    storyNextButton.textContent = "Финал";
  } else {
    storyNextButton.textContent = "Дальше";
  }

  inputLocked = false;
  setActionsEnabled(true);

  showScreen("story");
}

function enterFinalFinisherMode() {
  finalFinisherReady = true;
  inputLocked = false;

  updateFinalAbilityVisibility();
  setActionsEnabled(true);

  setBattleLog(
    "Большая Жизненная Хрень потеряла все HP, но всё ещё драматично держится за экран. Остался только один правильный ответ."
  );
}

function continueVictoryStory() {
  const chapter = getCurrentChapter();

  currentVictoryIndex += 1;

  if (currentVictoryIndex < chapter.victory.length) {
    storyText.textContent = chapter.victory[currentVictoryIndex];
    return;
  }

  currentChapterIndex += 1;

  if (currentChapterIndex >= chapters.length) {
    showFinalVictoryScreen();
    return;
  }

  startChapter();
}

function showFinalVictoryScreen() {
  victoryScreen.querySelector("h1").textContent = "Ди победила день";
  victoryScreen.querySelectorAll("p")[0].textContent =
    "Все враги были поставлены на место.";

  victoryScreen.querySelectorAll("p")[1].textContent =
    "Большой день закончился. Диа Миа осталась красивой, сильной и слегка уставшей, что только усилило легенду.";

  restartButton.textContent = "Пройти ещё раз";

  showScreen("victory");
}

function updateFinalAbilityVisibility() {
  const shouldShowAve = finalFinisherReady && !finalFinisherUsed;

  actionsContainer.classList.toggle("finisher-ready", shouldShowAve);

  actionButtons.forEach((button) => {
    if (button.dataset.action === "ave") {
      button.style.display = shouldShowAve ? "block" : "none";
    }
  });
}

startButton.addEventListener("click", startGame);
storyNextButton.addEventListener("click", continueStory);
restartButton.addEventListener("click", startGame);

actionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    playerAction(button.dataset.action);
  });
});
