import React from "react";
import cases from "../images/ourCases.png";
import "../styles/cases.css";
import wedding from "../images/cases/wedding.jpg";
import darkness from "../images/cases/darkness.jpg";
import last from "../images/cases/last.jpg";
import next from "../images/next.png";

export default function Cases() {
  return (
    <main className="cases">
      <div className="header_cases">
        <div>
          <img src={cases} alt=" " />
        </div>
      </div>
      <div className="cases_container">
        <div>
          <div className="order case_image">
            <img src={wedding} alt=" " />
          </div>
          <div>
            <h2>جريمة في يوم زفاف</h2>
            <p>
              حب حتى الموت هكذا نقشت الضحية هذا الكلمات على خاتم الخطوبة .. لكن
              الموت زارها في يوم زفافها لتصبح غادة ضحية جريمة غامضة حيرت
              المحققين منذ عشرين عام يعيش القاتل حر طليقاً لم تصل له العدالة إلى
              الان
            </p>
            <a href="https://unresolvedcass.com/%D8%AC%D8%B1%D9%8A%D9%85%D8%A9-%D9%81%D9%8A-%D9%8A%D9%88%D9%85-%D8%A7%D9%84%D8%B2%D9%81%D8%A7%D9%81/p2078030650">
              <img src={next} alt="" />
            </a>
          </div>
        </div>
        <div>
          <div className="case_image">
            <img src={darkness} alt=" " />
          </div>
          <div>
            <h2>موت في الظلام</h2>
            <p>
              تروي القصة حادثة انتحار وقعت في أحد المنازل المرموقة راح ضحيتها
              شاب يدعى رامي، لكن القصة لم تنتهي بعد؟ ما سر البيت المظلم ولماذا
              كتب رامي قبل أن يموت " أقرب من ظلك أبعد من الشمس" لم يستطع أحد من
              المحققين أن يفك رموز الحادثة لذا تم اغلاق القضية في حينها. نريد
              منك اعادة التحقيق مرة أخرى والكشف عن المجرم
            </p>
            <a href="#">
              <img src={next} alt="" />
            </a>
          </div>
        </div>
        <div>
          <div className="order case_image">
            <img src={last} alt=" " />
          </div>
          <div>
            <h2>العرض الاخير</h2>
            <p>
              من فوق خشبة المسرح وأمام مرئى الجميع خطفت الطفلة نايا ليبقى الدليل
              الوحيد قناعاً مبتسم وصرخات الطفلة،،أنت تمسك بيديك قضية مختلفة جداً
              في هذه القضية بالتحديد أراد المجرم أن يظهر للعلن لا أن يختفي داخل
              ملفات التحقيق.
            </p>
            <a href="#">
              <img src={next} alt="" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
