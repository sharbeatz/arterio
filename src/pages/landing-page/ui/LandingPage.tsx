import { Button } from "antd";
import {
  ArrowRightOutlined,
  BulbOutlined,
  HeartOutlined,
  CalendarOutlined,
  FlagOutlined,
  ReadOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router";

import styles from "./LandingPage.module.scss";

export const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <HeartOutlined />,
      iconClass: styles.moodIcon,
      title: "Дневник настроения",
      description:
        "Отслеживай настроение, уровень энергии и качество сна. Замечай закономерности и лучше понимай своё состояние.",
    },
    {
      icon: <FlagOutlined />,
      iconClass: styles.insightIcon,
      title: "Мои цели",
      description:
        "Превращай большие желания в небольшие задачи. Отмечай достижения и наблюдай за своим прогрессом.",
    },
    {
      icon: <BulbOutlined />,
      iconClass: styles.insightIcon,
      title: "Инсайты и заметки",
      description:
        "Сохраняй мысли, идеи, выводы и наблюдения, чтобы ничего важного не терялось.",
    },
    {
      icon: <ReadOutlined />,
      iconClass: styles.activityIcon,
      title: "База знаний",
      description:
        "Изучай короткие материалы о психологии, привычках, продуктивности и саморазвитии.",
    },
    {
      icon: <ToolOutlined />,
      iconClass: styles.activityIcon,
      title: "Практики и инструменты",
      description:
        "Используй упражнения и интерактивные инструменты, которые помогают лучше разобраться в себе и принимать решения.",
    },
    {
      icon: <CalendarOutlined />,
      iconClass: styles.activityIcon,
      title: "Мой путь",
      description:
        "Возвращайся к прошлым записям, изучай недельные итоги и замечай, как меняешься со временем.",
    },
  ];

  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              ТВОЁ ПРОСТРАНСТВО ДЛЯ РАЗВИТИЯ
            </span>

            <h1>
              Развивайся осознанно.
              <span> Меняй жизнь постепенно.</span>
            </h1>

            <p className={styles.description}>
              Всё необходимое для работы над собой — в одном месте. Отслеживай
              настроение, ставь цели, веди личные заметки, изучай полезные
              материалы и анализируй свой прогресс. Маленькие действия каждый
              день помогут лучше понять себя и приблизиться к тому, кем ты
              хочешь стать.
            </p>

            <div className={styles.actions}>
              <Button
                type="primary"
                size="large"
                shape="round"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
                onClick={() => navigate("/insights")}
              >
                Начать развиваться
              </Button>
            </div>

            <span className={styles.note}>
              Не нужно менять всё сразу. Начни с малого и двигайся в своём
              темпе.
            </span>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.visualCircle} />

            <div className={styles.visualCard}>
              <span className={styles.cardLabel}>ТВОЁ РАЗВИТИЕ</span>

              <div className={styles.thoughtIcon}>
                <BulbOutlined />
              </div>

              <h3>Каждый шаг имеет значение</h3>

              <p>
                Сохраняй идеи, фиксируй достижения и замечай свои изменения.
              </p>

              <div className={styles.cardFooter}>
                <span>Твой путь начинается здесь</span>
                <ArrowRightOutlined />
              </div>
            </div>

            <div className={styles.moodCard}>
              <HeartOutlined />

              <div>
                <span>ЗАБОТА О СЕБЕ</span>
                <strong>Прислушивайся к себе</strong>
              </div>

              <span className={styles.moodEmoji}>☺</span>
            </div>

            <div className={styles.activityCard}>
              <CalendarOutlined />
              <span>Твой прогресс — день за днём</span>
            </div>
          </div>
        </section>

        <section id="features" className={styles.features}>
          <div className={styles.sectionHeading}>
            <h2>Всё необходимое для твоего развития</h2>

            <p>
              Шесть направлений, которые помогут лучше понять себя, сформировать
              полезные привычки, достигать целей и отслеживать личный прогресс.
            </p>
          </div>

          <div className={styles.featureGrid}>
            {features.map((feature) => (
              <article className={styles.featureCard} key={feature.title}>
                <div className={feature.iconClass}>{feature.icon}</div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.cta}>
          <div>
            <h2>Твой путь начинается с первого шага</h2>

            <p>
              Не стремись к идеалу. Узнавай себя, пробуй новое, ставь цели и
              постепенно создавай жизнь, которая тебе нравится.
            </p>
          </div>

          <Button
            type="primary"
            size="large"
            shape="round"
            icon={<ArrowRightOutlined />}
            iconPlacement="end"
            onClick={() => navigate("/insights")}
          >
            Сделать первый шаг
          </Button>
        </section>
      </main>
    </div>
  );
};
