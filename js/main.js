/* ==========================================================================
   IMPACT-HCC — main.js
   Shared interactions: smooth scroll, reveal, count-up, header, nav, parallax
   Dependency-free (no build step). Loaded on every page with `defer`.
   ========================================================================== */
(function () {
  'use strict';

  // Progressive enhancement: mark that JS is active so CSS can safely hide
  // reveal elements. Added synchronously to avoid a flash of hidden content.
  document.documentElement.classList.add('js');

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Language switch / Arabic localization ---------- */
  const i18n = {
    ar: {
      'Home': 'الرئيسية',
      'About Us': 'من نحن',
      'Advisory Services': 'الخدمات الاستشارية',
      'Our Clients': 'عملاؤنا',
      'Our Partners': 'شركاؤنا',
      'Insights': 'الرؤى',
      'Contact': 'تواصل',
      'Contact Us': 'تواصل معنا',
      'Human Capital Consultancy': 'استشارات رأس المال البشري',
      'Privacy Policy': 'سياسة الخصوصية',
      'Terms of Use': 'شروط الاستخدام',
      'Terms & Conditions': 'الشروط والأحكام',
      'Sitemap': 'خريطة الموقع',
      'Connect With Us': 'تواصل معنا',
      'Follow Us': 'تابعنا',
      'LinkedIn': 'لينكدإن',
      'Email': 'البريد الإلكتروني',
      'Website': 'الموقع الإلكتروني',
      'Website:': 'الموقع الإلكتروني:',
      'Explore': 'استكشف',
      'Quick Links': 'روابط سريعة',
      'Return Home': 'العودة للرئيسية',
      'This page has moved on.': 'هذه الصفحة غير متاحة.',
      "The page you're looking for isn't here — but our thinking on human performance is just a click away.": 'الصفحة التي تبحث عنها غير موجودة، لكن أفكارنا حول الأداء البشري قريبة منك.',

      'The Architecture of Human Performance': 'هندسة الأداء البشري',
      'Human capital': 'رأس المال البشري',
      'strategy for': 'استراتيجية للمنظمات',
      'organizations ready': 'المستعدة',
      'to perform': 'للأداء',
      'differently.': 'بشكل مختلف.',
      'We partner with leaders to build stronger people systems, sharper capability, and cultures that create measurable business value.': 'نشارك القادة في بناء أنظمة بشرية أقوى، وقدرات أكثر وضوحاً، وثقافات تصنع قيمة أعمال قابلة للقياس.',
      'Explore Our Services': 'استكشف خدماتنا',
      'Start a Conversation': 'ابدأ حواراً',
      'Scroll to explore': 'مرر للاستكشاف',
      'Aligning People.': 'مواءمة الأفراد.',
      'Empowering Leaders.': 'تمكين القادة.',
      'Driving Impact.': 'صناعة الأثر.',
      'We work at the intersection of people, performance, and organizational change.': 'نعمل عند تقاطع الأفراد، والأداء، والتغيير المؤسسي.',
      'Our Thinking Model': 'نموذج تفكيرنا',
      'Aligned systems. Compounding impact.': 'أنظمة متوائمة. أثر متضاعف.',
      'We align five critical dimensions to build human systems that drive performance and endure change.': 'نوائم خمسة أبعاد محورية لبناء أنظمة بشرية تقود الأداء وتتحمل التغيير.',
      'Structure': 'الهيكل',
      'The right design that clarifies roles, decisions, and governance.': 'التصميم الصحيح الذي يوضح الأدوار والقرارات والحوكمة.',
      'Organizational Development': 'تطوير المنظمات',
      'Building human systems that unlock growth and lasting performance.': 'بناء أنظمة بشرية تطلق النمو وتدعم الأداء المستدام.',
      'Leadership Effectiveness': 'فاعلية القيادة',
      'Strengthening leaders to navigate complexity and drive impact.': 'تمكين القادة من التعامل مع التعقيد وتحقيق الأثر.',
      'Leaders who inspire, align, and mobilize people.': 'قادة يلهمون ويوائمون ويحشدون الأفراد.',
      'Capability': 'القدرات',
      'Building the skills and mindsets that drive execution.': 'بناء المهارات والعقليات التي تدفع التنفيذ.',
      'Performance & Rewards': 'الأداء والمكافآت',
      'Designing systems that inspire high performance and engagement.': 'تصميم أنظمة تلهم الأداء العالي وتعزز الالتزام.',
      'Culture & Change': 'الثقافة والتغيير',
      'Culture': 'الثقافة',
      'Shaping a culture that fuels engagement and accountability.': 'تشكيل ثقافة تغذي المشاركة والمساءلة.',
      'Performance': 'الأداء',
      'Measurable outcomes that create lasting value.': 'مخرجات قابلة للقياس تصنع قيمة مستدامة.',
      'One system. Multiplying results.': 'نظام واحد. نتائج متضاعفة.',
      'Shaping cultures that adapt, innovate, and sustain competitive advantage.': 'تشكيل ثقافات تتكيف وتبتكر وتحافظ على الميزة التنافسية.',
      'Talent & Capability': 'المواهب والقدرات',
      'Building the capabilities and bench strength that future success requires.': 'بناء القدرات والصفوف القيادية التي يتطلبها نجاح المستقبل.',
      'Aligning structure, roles, and systems to create organizations that are built to perform.': 'مواءمة الهيكل والأدوار والأنظمة لبناء منظمات مصممة للأداء.',
      'Learn More': 'اعرف المزيد',
      'Leadership Coaching': 'التدريب القيادي',
      'Elevating leaders. Expanding impact.': 'ارتقاء بالقادة وتوسيع للأثر.',
      'Talent Acquisition': 'استقطاب المواهب',
      "Secure the right people to build what's next.": 'استقطاب الأشخاص المناسبين لبناء المرحلة القادمة.',
      'Learning & Excellence': 'التعلم والتميز',
      'Developing capability that compounds over time.': 'تنمية قدرات تتراكم قيمتها مع الوقت.',
      'Our Advisory Capabilities': 'قدراتنا الاستشارية',
      'We help you design organization structures, roles, and ways of working that unlock performance at every level.': 'نساعدكم على تصميم الهياكل التنظيمية والأدوار وطرق العمل التي تطلق الأداء في كل مستوى.',
      'Explore this capability': 'استكشف هذه القدرة',
      'Strengthening leaders to navigate complexity and create impact.': 'تعزيز قدرة القادة على التعامل مع التعقيد وصناعة الأثر.',
      'Attracting, developing, and engaging talent that fuels growth.': 'استقطاب المواهب وتطويرها وإشراكها بما يغذي النمو.',
      'Performance Systems': 'أنظمة الأداء',
      'Designing accountability and performance systems that drive results.': 'تصميم أنظمة مساءلة وأداء تقود النتائج.',
      'View All Capabilities': 'عرض كل القدرات',
      'Impact that compounds. Partnerships that endure.': 'أثر يتراكم. وشراكات تدوم.',
      'Leading brands served globally': 'علامات رائدة نخدمها عالمياً',
      'Transformation programs delivered': 'برامج تحول تم تنفيذها',
      'Countries supported worldwide': 'دول ندعمها حول العالم',
      'Years of advisory excellence and trust': 'سنوات من التميز والثقة الاستشارية',
      'IMPACT-HCC challenged the way we think about leadership and built the capability architecture we needed to scale with confidence.': 'غيّرت IMPACT-HCC طريقة تفكيرنا في القيادة، وبنت لنا بنية القدرات التي احتجناها للتوسع بثقة.',
      'Chief People Officer': 'الرئيس التنفيذي للموارد البشرية',
      'Global Financial Services Firm': 'شركة خدمات مالية عالمية',
      'Trusted by forward-thinking leaders': 'موثوقون لدى قادة يستشرفون المستقبل',
      "Insights that drive what's next": 'رؤى تقود ما هو قادم',
      'View All Insights': 'عرض كل الرؤى',
      'Leadership': 'القيادة',
      'The New Mandate for Executive Leadership': 'التكليف الجديد للقيادة التنفيذية',
      'How top leaders are redefining impact in a complex world.': 'كيف يعيد كبار القادة تعريف الأثر في عالم معقد.',
      'Read More': 'اقرأ المزيد',
      'Organizational Performance': 'الأداء المؤسسي',
      'Designing Organizations for Sustainable High Performance': 'تصميم منظمات للأداء العالي المستدام',
      'Building adaptive systems that drive enduring value.': 'بناء أنظمة مرنة تقود قيمة مستدامة.',
      'Building adaptive systems that drive lasting value.': 'بناء أنظمة مرنة تقود قيمة مستمرة.',
      'Future-Ready Capabilities for Critical Growth': 'قدرات جاهزة للمستقبل من أجل نمو حاسم',
      "Investing in the skills and mindsets that drive what's next.": 'الاستثمار في المهارات والعقليات التي تقود القادم.',
      "Let's build the human systems behind better performance.": 'لنبنِ الأنظمة البشرية وراء أداء أفضل.',
      "Let's start a conversation": 'لنبدأ حواراً',
      'Understand your priorities': 'فهم أولوياتك',
      'Explore opportunities': 'استكشاف الفرص',
      'Diagnose + Build + Integrate + Excel': 'تشخيص + بناء + دمج + تميز',
      'Drive measurable impact': 'تحقيق أثر قابل للقياس',
      'IMPACT-HCC. All rights reserved.': 'جميع الحقوق محفوظة لـ IMPACT-HCC.',
      'IMPACT-HCC. All Rights Reserved.': 'جميع الحقوق محفوظة لـ IMPACT-HCC.',

      'About IMPACT-HCC': 'عن IMPACT-HCC',
      'Impact-HCC is a Dubai-based boutique firm led by immensely talented HR Experts, who are recognized by the industry as': 'IMPACT-HCC شركة متخصصة مقرها دبي يقودها خبراء موارد بشرية موهوبون ومعترف بهم في القطاع بوصفهم',
      'knowledge leaders': 'قادة معرفة',
      'Within a couple of years the team managed to successfully expand its operations to embark on another chapter.': 'خلال سنوات قليلة، نجح الفريق في توسيع عملياته والانتقال إلى فصل جديد من النمو.',
      'As a team, we pride ourselves in constantly endeavoring into challenging projects, that require us to innovate and respect our clients in their respective transformational journeys needed to sustain their competitive edge in a continuously and rapidly changing and evolving business environment.': 'نفتخر كفريق بخوض مشاريع تتطلب الابتكار واحترام رحلة كل عميل في التحول، بما يساعده على الحفاظ على ميزته التنافسية في بيئة أعمال تتغير وتتطور بسرعة.',
      'This aspirational transformation is delivered through our tailored turnkey HR solutions, that are especially designed to meet the unique needs and expectations of every client.': 'نحقق هذا التحول الطموح من خلال حلول موارد بشرية متكاملة ومصممة خصيصاً لتلبية احتياجات وتوقعات كل عميل.',
      'Governmental entities and international organizations.': 'جهات حكومية ومنظمات دولية.',
      'Governmental entities and international organizations': 'جهات حكومية ومنظمات دولية',
      'Market leaders, trend setters or innovators from various sectors within the region and across the globe.': 'قادة سوق ومبتكرون من قطاعات متعددة في المنطقة وحول العالم.',
      'Market leaders, trend setters or innovators from various sectors within the region and across the globe': 'قادة سوق ومبتكرون من قطاعات متعددة في المنطقة وحول العالم',
      'Aspiring small and medium organizations.': 'منظمات صغيرة ومتوسطة طموحة.',
      'Aspiring small and medium organizations': 'منظمات صغيرة ومتوسطة طموحة',
      'Our Team': 'فريقنا',
      'Consists of HR Experts with proven success track record on international and regional scale.': 'يتكون من خبراء موارد بشرية لديهم سجل نجاح مثبت على المستويين الإقليمي والدولي.',
      'Consists of HR Experts with proven success track record in international and regional arenas.': 'يتكون من خبراء موارد بشرية لديهم سجل نجاح مثبت في الأسواق الإقليمية والدولية.',
      'Utilizes the latest technology platforms and knowledge database, to ensure quality, efficiency and cost time saving on the delivery of each assignment.': 'يوظف أحدث المنصات التقنية وقواعد المعرفة لضمان الجودة والكفاءة وتوفير الوقت والتكلفة في كل مهمة.',
      'Utilizes the latest technology platforms and knowledge database, to ensure quality, efficiency and cost/time saving on the delivery of each assignment.': 'يوظف أحدث المنصات التقنية وقواعد المعرفة لضمان الجودة والكفاءة وتوفير الوقت والتكلفة في تنفيذ كل مهمة.',
      'Is with high integrity, professionalism, expatriates and knowledge, who aspire to deliver real transformation and impact in their environment.': 'يعمل بنزاهة ومهنية وخبرة ومعرفة عالية لتحقيق تحول وأثر حقيقيين في بيئة العملاء.',
      'Is with high integrity, professionalism, experience and knowledge, who aspire to deliver real transformation and impact in their environment.': 'يعمل بنزاهة ومهنية وخبرة ومعرفة عالية لتحقيق تحول وأثر حقيقيين في بيئة العملاء.',
      'Turnkey human capital solutions, tailored to the unique needs of every client.': 'حلول متكاملة لرأس المال البشري، مصممة وفق الاحتياجات الفريدة لكل عميل.',

      'Advisory Services': 'الخدمات الاستشارية',
      'Our Services': 'خدماتنا',
      'At IMPACT-HCC, we architect human capital solutions that strengthen capability, elevate leadership, and build cultures that perform—today and for the future.': 'في IMPACT-HCC، نصمم حلول رأس مال بشري تعزز القدرات، وترتقي بالقيادة، وتبني ثقافات تؤدي اليوم وللمستقبل.',
      'Our services are tailored to your goals, your people, and your strategy—designed to deliver measurable, lasting impact.': 'خدماتنا مصممة وفق أهدافك وأفرادك واستراتيجيتك، لتحقيق أثر ملموس ومستدام.',
      'Aligning talent, leadership, and transformation to': 'مواءمة المواهب والقيادة والتحول من أجل',
      'build organizations that thrive.': 'بناء منظمات تزدهر.',
      'Consultancy Service': 'الخدمات الاستشارية',
      "We provide Consultancy Services targeting the HR Department's functional effectiveness.": 'نقدم خدمات استشارية تستهدف فاعلية وظائف إدارة الموارد البشرية.',
      'Training and Development': 'التدريب والتطوير',
      'We provide our clients personalized competency-based training and coaching solutions aimed at continuous development.': 'نقدم لعملائنا حلول تدريب وتوجيه مخصصة قائمة على الكفاءات وهادفة إلى التطوير المستمر.',
      'Assessment Service': 'خدمات التقييم',
      'We provide competency-based assessment and personality profiling solutions for recruitment, career development and/or self-awareness.': 'نقدم حلول تقييم قائمة على الكفاءات وتحليل السمات الشخصية للتوظيف والتطوير المهني والوعي الذاتي.',
      'Recruitment Service': 'خدمات التوظيف',
      'We provide recruitment, headhunting and executive search services to clients in all market sectors.': 'نقدم خدمات التوظيف واستقطاب الكفاءات والبحث التنفيذي للعملاء في مختلف القطاعات.',
      'Conscious Business Services': 'خدمات الأعمال الواعية',
      "We unlock the power of consciousness in organizations, transforming leaders, driving real engagement of people and maximizing an organization's full potential.": 'نطلق قوة الوعي داخل المنظمات، ونحوّل القادة، ونقود مشاركة حقيقية للأفراد، ونفعّل كامل إمكانات المنظمة.',
      'Public Speaking Services': 'خدمات التحدث العام',
      'We provide public speaking services focused on motivational speaking, humanitarian development, business customer service, large-group communication, and mass tourism.': 'نقدم خدمات التحدث العام في مجالات التحفيز، والتنمية الإنسانية، وخدمة العملاء، والتواصل مع المجموعات الكبيرة، والسياحة الجماعية.',
      'Global Assignment Services': 'خدمات الإسناد العالمي',
      'We provide global assignment consultancy services to medium and large organizations interested in managing the needs of their travelling staff located globally.': 'نقدم خدمات استشارية للإسناد العالمي للمنظمات المتوسطة والكبيرة التي تدير احتياجات موظفيها المنتشرين عالمياً.',
      'Corporate Wellbeing Programs': 'برامج الرفاه المؤسسي',
      "We design and develop Corporate Wellbeing Programs tailored to our client's needs.": 'نصمم ونطور برامج رفاه مؤسسي مصممة وفق احتياجات العملاء.',
      'Compliance Programs': 'برامج الامتثال',
      'We audit, design, develop, and implement bespoke Compliance Programs on the Code of Ethics and Business Conduct to ensure customers benefit from the latest market best practices.': 'نراجع ونصمم ونطور وننفذ برامج امتثال مخصصة لمدونة الأخلاقيات وسلوك الأعمال بما يضمن الاستفادة من أفضل الممارسات الحديثة.',
      'Corporate, CSR and Well-Being Events': 'فعاليات الشركات والمسؤولية المجتمعية والرفاه',
      'We design, organize, and manage various types of corporate team-building, CSR, and/or well-being events of large and small scale, customized to meet your unique goals.': 'نصمم وننظم وندير فعاليات بناء فرق ومسؤولية مجتمعية ورفاه على نطاقات مختلفة ومخصصة لأهدافكم.',
      'Software Consultancy': 'استشارات البرمجيات',
      'We design, develop, and implement any type of IT solution to meet your business needs.': 'نصمم ونطور وننفذ حلول تقنية معلومات تلبي احتياجات أعمالكم.',
      'Purpose-led. People-centered. Performance-driven.': 'مدفوعة بالغاية. محورها الإنسان. وموجهة بالأداء.',
      'We understand your context and co-create solutions that fit your reality.': 'نفهم سياقكم ونشارككم ابتكار حلول تناسب واقعكم.',
      'We build capability and unlock human potential at every level.': 'نبني القدرات ونطلق الإمكانات البشرية على كل مستوى.',
      'We deliver measurable impact aligned to your strategic objectives.': 'نحقق أثراً قابلاً للقياس ومتوافقاً مع أهدافكم الاستراتيجية.',

      'Trusted Partnerships': 'شراكات موثوقة',
      'IMPACT-HCC is trusted by leading organizations across government, healthcare, hospitality, aviation, retail, and enterprise. Together, we shape leadership, build capability, and elevate human performance where it matters most.': 'تحظى IMPACT-HCC بثقة منظمات رائدة في الحكومة والرعاية الصحية والضيافة والطيران والتجزئة والمؤسسات. معاً نشكل القيادة ونبني القدرات ونرتقي بالأداء البشري حيث يكون الأثر أكبر.',
      'A portfolio of organizations who trust us to shape': 'محفظة من المنظمات التي تثق بنا في تشكيل',
      'leadership, capability, and human performance.': 'القيادة والقدرات والأداء البشري.',
      'Government': 'الحكومة',
      '& Public Sector': 'والقطاع العام',
      'Hospitality': 'الضيافة',
      '& Retail': 'والتجزئة',
      'Healthcare': 'الرعاية الصحية',
      '& Wellness': 'والرفاه',
      'Aviation': 'الطيران',
      '& Transport': 'والنقل',
      'Enterprise': 'المؤسسات',
      '& Technology': 'والتقنية',
      'Media': 'الإعلام',
      '& Entertainment': 'والترفيه',
      'Regional': 'إقليميون',
      '& Global Partners': 'وشركاء عالميون',
      'Organizations': 'منظمات',
      'From government, enterprise, and mission-driven sectors.': 'من قطاعات حكومية ومؤسسية وهادفة.',
      'Sectors': 'قطاعات',
      'Diverse industries united by a human-first approach.': 'قطاعات متنوعة يجمعها نهج يضع الإنسان أولاً.',
      'UAE & Beyond': 'الإمارات وما بعدها',
      'Regional & Global Reach': 'حضور إقليمي وعالمي',
      'Trusted across the UAE, the GCC, and beyond.': 'ثقة تمتد عبر الإمارات والخليج وما بعدهما.',
      'Long-Term': 'طويلة الأمد',
      'Built on impact, integrity, and shared success.': 'مبنية على الأثر والنزاهة والنجاح المشترك.',
      'IMPACT-HCC has been a true partner in our journey of transformation. Their deep understanding of people, leadership, and organizational performance sets them apart.': 'كانت IMPACT-HCC شريكاً حقيقياً في رحلة تحولنا. إن فهمهم العميق للأفراد والقيادة والأداء المؤسسي يميزهم.',
      '— Human Capital Leader, Government Sector': '— قائد رأس مال بشري، القطاع الحكومي',

      'Strategic Alliances': 'تحالفات استراتيجية',
      'Strategic alliances that elevate impact, expand reach, and create meaningful transformation.': 'تحالفات استراتيجية تعزز الأثر، وتوسع نطاق الوصول، وتصنع تحولاً ذا معنى.',
      'A global network, aligned around measurable human impact.': 'شبكة عالمية متوافقة حول أثر بشري قابل للقياس.',
      "Let's build partnerships": 'لنبنِ شراكات',
      'that create lasting impact.': 'تصنع أثراً مستداماً.',

      "Insights That Drive What's Next": 'رؤى تقود القادم',
      'Thinking for': 'أفكار من أجل',
      'leaders building': 'قادة يبنون',
      "what's": 'ما هو',
      'next.': 'قادم.',
      'Perspectives on leadership, organizational performance, talent, and the future of work — from the advisors architecting human performance at IMPACT-HCC.': 'رؤى حول القيادة، والأداء المؤسسي، والمواهب، ومستقبل العمل من مستشارين يصممون الأداء البشري في IMPACT-HCC.',
      'Featured': 'مميز',
      'All Perspectives': 'كل الرؤى',
      'The full library.': 'المكتبة الكاملة.',
      'All': 'الكل',
      'Talent': 'المواهب',
      'Culture': 'الثقافة',
      'Culture as Competitive Advantage': 'الثقافة كميزة تنافسية',
      'Why the strongest organizations engineer culture on purpose.': 'لماذا تصمم أقوى المنظمات ثقافتها بوعي.',
      'Rethinking Rewards for the Modern Workforce': 'إعادة التفكير في المكافآت للقوى العاملة الحديثة',
      'Aligning incentives with performance that actually compounds.': 'مواءمة الحوافز مع أداء تتراكم قيمته فعلاً.',
      'Conscious Business': 'الأعمال الواعية',
      'The Conscious Organization': 'المنظمة الواعية',
      'Unlocking human potential through purpose-led leadership.': 'إطلاق الإمكانات البشرية عبر قيادة تقودها الغاية.',

      "Let's Start a Conversation": 'لنبدأ حواراً',
      'We partner with leaders to solve complex human and organizational challenges. Our senior advisors are accessible, responsive, and committed to building long-term impact with you.': 'نشارك القادة في معالجة التحديات البشرية والمؤسسية المعقدة. مستشارونا الكبار متاحون ومتجاوبون وملتزمون ببناء أثر طويل المدى معكم.',
      'IMPACT Human Capital Consultancy': 'IMPACT لاستشارات رأس المال البشري',
      'Trade License #60903, Dubai, UAE': 'رخصة تجارية رقم 60903، دبي، الإمارات',
      'UAE Head Office': 'المكتب الرئيسي في الإمارات',
      'SPAIN Campus Office': 'مكتب إسبانيا',
      'Spain Campus Office': 'مكتب إسبانيا',
      'Office': 'المكتب',
      'Office Phone': 'هاتف المكتب',
      'Office Phone:': 'هاتف المكتب:',
      'Office Fax': 'فاكس المكتب',
      'Office Fax:': 'فاكس المكتب:',
      'P.O. Box': 'صندوق البريد',
      'Address': 'العنوان',
      'Address: C/Barcelona 19 | 5-2a,': 'العنوان: C/Barcelona 19 | 5-2a,',
      'Mobile': 'الجوال',
      'Mobile:': 'الجوال:',
      'Dubai HQ': 'مقر دبي',
      'Business Bay, Dubai, UAE': 'الخليج التجاري، دبي، الإمارات',
      'Barcelona Campus': 'مكتب برشلونة',
      'El Masnou, Barcelona, Spain': 'إل ماسنو، برشلونة، إسبانيا',
      'Email Response': 'الرد عبر البريد',
      'We respond within one business day': 'نرد خلال يوم عمل واحد',
      'Connect with our senior advisors and insights': 'تواصل مع مستشارينا الكبار واطّلع على رؤانا',
      'Build the human systems behind better performance.': 'ابنِ الأنظمة البشرية وراء أداء أفضل.',
      'Strategy conversations': 'حوارات استراتيجية',
      'Partnership enquiries': 'استفسارات الشراكات',
      'Advisory requests': 'طلبات الاستشارات',
      'Speaking engagements': 'طلبات التحدث',
      'Executive Humanism.': 'إنسانية تنفيذية.',
      'Measurable Impact.': 'أثر قابل للقياس.'
    }
  };

  const titleTranslations = {
    ar: {
      'IMPACT-HCC — Human Capital Strategy for Organizations Ready to Perform Differently': 'IMPACT-HCC — استراتيجية رأس المال البشري لمنظمات مستعدة لأداء مختلف',
      'IMPACT-HCC — Human Capital Strategy for Organizations Ready to Perform Differently': 'IMPACT-HCC — استراتيجية رأس المال البشري لمنظمات مستعدة لأداء مختلف',
      'About IMPACT-HCC — A Dubai-Based Boutique Human Capital Consultancy': 'عن IMPACT-HCC — شركة متخصصة في استشارات رأس المال البشري بدبي',
      'Advisory Services — IMPACT-HCC': 'الخدمات الاستشارية — IMPACT-HCC',
      'Our Clients — IMPACT-HCC': 'عملاؤنا — IMPACT-HCC',
      'Our Partners — IMPACT-HCC': 'شركاؤنا — IMPACT-HCC',
      'Insights — IMPACT-HCC': 'الرؤى — IMPACT-HCC',
      'Contact Us — IMPACT-HCC': 'تواصل معنا — IMPACT-HCC',
      'Page Not Found — IMPACT-HCC': 'الصفحة غير موجودة — IMPACT-HCC'
    }
  };

  const originalText = new WeakMap();
  const originalAttrs = new WeakMap();
  const normalized = (value) => String(value || '').replace(/\s+/g, ' ').trim();

  const getRequestedLanguage = () => {
    const params = new URLSearchParams(window.location.search);
    const queryLang = params.get('lang');
    if (queryLang === 'ar' || queryLang === 'en') {
      window.localStorage.setItem('impact-hcc-lang', queryLang);
      return queryLang;
    }
    return window.localStorage.getItem('impact-hcc-lang') || 'en';
  };

  let currentLanguage = getRequestedLanguage();

  const shouldSkipNode = (node) => {
    const parent = node.parentElement;
    return !parent || parent.closest('script, style, svg, iframe, noscript, textarea, input, [data-no-i18n]');
  };

  const translateTextNodes = (lang) => {
    const dict = i18n[lang] || {};
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (shouldSkipNode(node) || !normalized(node.nodeValue)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach((node) => {
      if (!originalText.has(node)) originalText.set(node, node.nodeValue);
      const source = originalText.get(node);
      const key = normalized(source);
      const replacement = lang === 'ar' ? dict[key] : null;
      if (!replacement) {
        node.nodeValue = source;
        return;
      }
      const leading = source.match(/^\s*/)[0];
      const trailing = source.match(/\s*$/)[0];
      node.nodeValue = leading + replacement + trailing;
    });
  };

  const translateAttributes = (lang) => {
    const dict = i18n[lang] || {};
    document.querySelectorAll('[aria-label], [title], [alt], [placeholder]').forEach((el) => {
      if (el.closest('svg, [data-no-i18n]')) return;
      const state = originalAttrs.get(el) || {};
      ['aria-label', 'title', 'alt', 'placeholder'].forEach((attr) => {
        if (!el.hasAttribute(attr)) return;
        if (!state[attr]) state[attr] = el.getAttribute(attr);
        const key = normalized(state[attr]);
        el.setAttribute(attr, lang === 'ar' && dict[key] ? dict[key] : state[attr]);
      });
      originalAttrs.set(el, state);
    });
  };

  const updateLanguageUrl = (lang) => {
    const url = new URL(window.location.href);
    if (lang === 'ar') url.searchParams.set('lang', 'ar');
    else url.searchParams.delete('lang');
    window.history.replaceState({}, '', url);
  };

  const updateLanguageSwitch = () => {
    const btn = document.querySelector('.lang-switch');
    if (!btn) return;
    const isArabic = currentLanguage === 'ar';
    btn.setAttribute('aria-label', isArabic ? 'Switch to English' : 'التبديل إلى العربية');
    btn.setAttribute('aria-pressed', String(isArabic));
    btn.querySelector('[data-lang-option="en"]').classList.toggle('is-active', !isArabic);
    btn.querySelector('[data-lang-option="ar"]').classList.toggle('is-active', isArabic);
  };

  const applyLanguage = (lang, options = {}) => {
    currentLanguage = lang === 'ar' ? 'ar' : 'en';
    document.documentElement.lang = currentLanguage === 'ar' ? 'ar' : 'en';
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('is-arabic', currentLanguage === 'ar');
    window.localStorage.setItem('impact-hcc-lang', currentLanguage);
    if (options.updateUrl !== false) updateLanguageUrl(currentLanguage);

    if (!document.documentElement.dataset.originalTitle) {
      document.documentElement.dataset.originalTitle = document.title;
    }
    const sourceTitle = document.documentElement.dataset.originalTitle;
    document.title = currentLanguage === 'ar' && titleTranslations.ar[sourceTitle]
      ? titleTranslations.ar[sourceTitle]
      : sourceTitle;

    translateTextNodes(currentLanguage);
    translateAttributes(currentLanguage);
    updateLanguageSwitch();
    window.dispatchEvent(new CustomEvent('impact:language-change', { detail: { lang: currentLanguage } }));
  };

  const initLanguageSwitch = () => {
    const navInner = document.querySelector('.nav-inner');
    if (!navInner || navInner.querySelector('.lang-switch')) return;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'lang-switch';
    btn.setAttribute('data-no-i18n', '');
    btn.innerHTML = '<span data-lang-option="en">EN</span><span data-lang-option="ar">عربي</span>';
    btn.addEventListener('click', () => applyLanguage(currentLanguage === 'ar' ? 'en' : 'ar'));
    const toggleButton = navInner.querySelector('.nav-toggle');
    navInner.insertBefore(btn, toggleButton || null);
  };

  initLanguageSwitch();
  applyLanguage(currentLanguage, { updateUrl: currentLanguage === 'ar' });

  /* ---------- Header scroll state ---------- */
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (!header) return;
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav ---------- */
  const toggle = document.querySelector('.nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => document.body.classList.toggle('nav-open'));
    document.querySelectorAll('.nav-links a').forEach(a =>
      a.addEventListener('click', () => document.body.classList.remove('nav-open'))
    );
  }

  /* ---------- Scroll reveal (IntersectionObserver) ---------- */
  const revealEls = document.querySelectorAll('[data-reveal], [data-reveal-stagger], .reveal-lines');
  if ('IntersectionObserver' in window && !prefersReduced) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  /* ---------- Count-up stats ---------- */
  const countEls = document.querySelectorAll('[data-count]');
  const runCount = (el) => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const dur = 1600;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = Math.round(eased * target);
      el.textContent = val + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if ('IntersectionObserver' in window && !prefersReduced) {
    const cio = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { runCount(e.target); cio.unobserve(e.target); } });
    }, { threshold: 0.5 });
    countEls.forEach(el => cio.observe(el));
  } else {
    countEls.forEach(el => { el.textContent = el.dataset.count + (el.dataset.suffix || ''); });
  }

  /* ---------- Parallax on [data-parallax] (subtle) ---------- */
  const parEls = Array.from(document.querySelectorAll('[data-parallax]'));
  if (parEls.length && !prefersReduced) {
    let ticking = false;
    const update = () => {
      const vh = window.innerHeight;
      parEls.forEach(el => {
        const r = el.getBoundingClientRect();
        const speed = parseFloat(el.dataset.parallax) || 0.12;
        const offset = (r.top + r.height / 2 - vh / 2) * -speed;
        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      });
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  /* ---------- Magnetic buttons ---------- */
  if (!prefersReduced && window.matchMedia('(pointer:fine)').matches) {
    document.querySelectorAll('[data-magnetic]').forEach(btn => {
      const strength = 0.35;
      btn.addEventListener('mousemove', (e) => {
        const r = btn.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * strength;
        const y = (e.clientY - r.top - r.height / 2) * strength;
        btn.style.transform = `translate(${x}px, ${y}px)`;
      });
      btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
    });
  }

  /* ---------- Premium pointer aura + tilt cards ---------- */
  const finePointer = window.matchMedia('(pointer:fine)').matches;
  if (!prefersReduced && finePointer) {
    const aura = document.createElement('span');
    aura.className = 'premium-aura';
    aura.setAttribute('aria-hidden', 'true');
    document.body.appendChild(aura);

    let auraTicking = false;
    let auraX = 0;
    let auraY = 0;
    window.addEventListener('pointermove', (event) => {
      auraX = event.clientX;
      auraY = event.clientY;
      if (!auraTicking) {
        requestAnimationFrame(() => {
          aura.style.setProperty('--aura-x', `${auraX}px`);
          aura.style.setProperty('--aura-y', `${auraY}px`);
          auraTicking = false;
        });
        auraTicking = true;
      }
    }, { passive: true });
  }

  const initPremiumMotion = (root = document) => {
    if (prefersReduced || !finePointer) return;
    root.querySelectorAll('[data-tilt]').forEach((card) => {
      if (card.dataset.tiltReady) return;
      card.dataset.tiltReady = 'true';
      card.addEventListener('pointermove', (event) => {
        const rect = card.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;
        card.style.setProperty('--mx', `${(px * 100).toFixed(2)}%`);
        card.style.setProperty('--my', `${(py * 100).toFixed(2)}%`);
        card.style.setProperty('--tilt-y', `${((px - 0.5) * 5).toFixed(2)}deg`);
        card.style.setProperty('--tilt-x', `${((0.5 - py) * 5).toFixed(2)}deg`);
      });
      card.addEventListener('pointerleave', () => {
        card.style.setProperty('--tilt-x', '0deg');
        card.style.setProperty('--tilt-y', '0deg');
      });
    });
  };
  window.impactInitPremiumMotion = initPremiumMotion;
  initPremiumMotion();

  /* ---------- Smooth anchor scroll ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const t = document.querySelector(id);
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' }); }
    });
  });

  /* ---------- Accordion (services / FAQ style) ---------- */
  document.querySelectorAll('[data-accordion] > [data-acc-item]').forEach(item => {
    const head = item.querySelector('[data-acc-head]');
    if (!head) return;
    head.addEventListener('click', () => {
      const open = item.classList.contains('open');
      item.parentElement.querySelectorAll('[data-acc-item].open').forEach(o => o.classList.remove('open'));
      if (!open) item.classList.add('open');
    });
  });

  /* ---------- Year injection ---------- */
  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });

  /* ---------- Hero letter/word intro ---------- */
  window.addEventListener('load', () => { document.body.classList.add('loaded'); });

  /* ---------- Safety net ----------
     If any reveal element is still hidden a few seconds after load (e.g. the
     tab never painted, an observer edge case, or JS partially failed earlier),
     force-reveal everything so content is never permanently invisible. */
  const forceReveal = () => {
    document.querySelectorAll('[data-reveal], [data-reveal-stagger], .reveal-lines').forEach(el => el.classList.add('in'));
  };
  window.addEventListener('load', () => { setTimeout(forceReveal, 2600); });
  // Also reveal immediately if the page is loaded into a non-painting/hidden tab.
  if (document.visibilityState === 'hidden') forceReveal();
})();
