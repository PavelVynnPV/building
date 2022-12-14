import React from "react";
import Title from "../HeaderForBackNInfoLinks/Title";
import styles from "./About.module.css";
import aboutus1 from "../utils/img/aboutus1.png";
import aboutus2 from "../utils/img/aboutus2.png";

function About({ link, setLink }) {
  const href = window.location.href;
  setLink(href);

  return (
    <>
      <Title link={link} />
      <div className={styles.content}>
        <p>
          <span>«BUDVEST»</span> – це стабільна компанія, яка динамічно
          розвивається та забезпечує надання високої якості послуг в будівельній
          <br />
          галузі. Вже кілька років компанія являється членом Будівельної палати
          України.
          <br />
          <br /> Компанія працює на ринку нерухомості з 2004 року та має
          державну ліцензію на здійснення всього комплексу робіт, пов’язаних
          <br /> з будівництвом будівель і споруд у відповідності з державним
          стандартом.
          <br />
          <br />
          <span>«BUDVEST»</span> користується заслуженою довірою і високою
          репутацією серед клієнтів та партнерів, що досягнуто завдяки
          <br /> виконанню своїх зобов’язань перед клієнтами та партнерами,
          чітким дотриманням законодавства, наявністю потужної
          <br /> матеріально-технічної бази, висококваліфікованим керівникам,
          інженерам та робітникам різних спеціальностей.
        </p>
        <img src={aboutus1} alt="aboutus_first_photo" />
        <p>
          Професіоналізм, цілеспрямованість, відповідальність – головні складові
          загальної характеристики компанії.
          <br />
          <br /> Успішно розвиваючись в умовах зростаючої конкуренції на
          українському ринку нерухомості, ми постійно вдосконалюємо свій
          <br /> виробничий і технічний потенціал, використовуємо передові
          методи роботи.
          <br />
          <br /> <span>Основними напрямками діяльності є</span> – будівництво
          багатоквартирних житлових будинків, приватних будинків, офісних,
          <br /> виробничих, відпочинково-оздоровчих об’єктів. Крім цього, ми
          надамо кваліфіковану допомогу з питань оформлення технічних
          <br /> паспортів та права власності на об’єкти нерухомості.
          <br />
          <br /> За період діяльності компанією успішно реалізовано ряд проектів
          в сферах житлового, промислового, громадського будівництва, зокрема
          житлові будинки, приватні будинки, готельні комплекси, виробничі бази.
        </p>
        <img src={aboutus2} alt="aboutus_second_photo" />
        <p>
          Спираючись на власні маркетингові дослідження, компанія оперативно
          реагує на постійно мінливий попит і пропонує<br/> споживачам продукт,
          відповідний їх очікуванням, а налагоджені зв’язки із партнерами,
          постачальниками, службами<br/> замовника-забудовника дозволяють пропонувати
          нашим клієнтам житло за доступними цінами і завжди забезпечувати здачу<br/>
          будинків в заплановані терміни.<br/><br/> Спектр пропонованого нами житла
          відповідає як державним стандартам так і вимогам покупця чи замовника
          та включає в себе<br/> будинки з квартирами підвищеної комфортності, а
          також проекти елітного житла, що дозволяє задовольнити потреби самих<br/>
          широких верств населення.<br/><br/> Завдяки наявній професійній
          матеріально-технічній базі, кваліфікованому персоналу, надійним
          партнерам та постачальникам ми<br/> досягаємо поставлених цілей та
          забезпечуємо будівництво якісного, сучасного комфортного житла та
          нежитлових об’єктів.
        </p>
      </div>
    </>
  );
}

export default About;
