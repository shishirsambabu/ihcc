/* ==========================================================================
   IMPACT-HCC — service detail renderer
   Builds the 11 standalone advisory service pages from shared content.
   ========================================================================== */
(function () {
  'use strict';

  const root = document.querySelector('[data-service-page]');
  if (!root) return;

  const labels = {
    en: {
      back: 'Advisory Services',
      visual: 'Human Capital Advisory',
      promise: 'Service Promise',
      fit: 'Best Fit',
      solve: 'What This Solves',
      approach: 'How We Help',
      outcomes: 'Outcomes Clients Use',
      rhythm: 'Engagement Rhythm',
      prev: 'Previous Capability',
      next: 'Next Capability',
      all: 'All Services',
      ctaTitle: 'Ready to shape the system behind better performance?',
      ctaCopy: 'Let’s define the advisory support your people, leaders, and organization need next.',
      ctaButton: 'Start a Conversation'
    },
    ar: {
      back: 'الخدمات الاستشارية',
      visual: 'استشارات رأس المال البشري',
      promise: 'وعد الخدمة',
      fit: 'الأكثر ملاءمة',
      solve: 'ما الذي تعالجه',
      approach: 'كيف نساعد',
      outcomes: 'مخرجات يستفيد منها العملاء',
      rhythm: 'إيقاع العمل',
      prev: 'القدرة السابقة',
      next: 'القدرة التالية',
      all: 'كل الخدمات',
      ctaTitle: 'هل أنتم مستعدون لتشكيل النظام وراء أداء أفضل؟',
      ctaCopy: 'لنحدد الدعم الاستشاري الذي يحتاجه أفرادكم وقادتكم ومنظمتكم في المرحلة القادمة.',
      ctaButton: 'ابدأ حواراً'
    }
  };

  const processSteps = {
    en: [
      ['01', 'Diagnose', 'Clarify the current state, pain points, and decision context.'],
      ['02', 'Design', 'Shape the model, tools, governance, and experience required.'],
      ['03', 'Activate', 'Build capability, align stakeholders, and guide implementation.'],
      ['04', 'Measure', 'Track adoption, performance, and the outcomes that matter.']
    ],
    ar: [
      ['01', 'تشخيص', 'توضيح الوضع الحالي ونقاط الألم وسياق القرار.'],
      ['02', 'تصميم', 'تشكيل النموذج والأدوات والحوكمة والتجربة المطلوبة.'],
      ['03', 'تفعيل', 'بناء القدرات ومواءمة أصحاب المصلحة وتوجيه التنفيذ.'],
      ['04', 'قياس', 'متابعة التبني والأداء والمخرجات الأهم.']
    ]
  };

  const services = {
    consultancy: {
      no: '01',
      file: 'service-consultancy.html',
      image: 'assets/images/insight-1.jpg?v=20260710servicepages',
      en: {
        title: 'Consultancy Service',
        kicker: 'Functional HR Effectiveness',
        lede: 'Strategic HR advisory for organizations that need clearer structures, sharper people systems, and a more effective human capital function.',
        visual: 'Architecting the HR function as a performance system.',
        promise: 'We help HR departments move from reactive service delivery to strategic enablement, with operating models, policies, and tools that leaders can actually use.',
        fit: 'Ideal for organizations reviewing HR effectiveness, restructuring the people function, or preparing for growth, transformation, or regional expansion.',
        solve: 'Many HR teams are asked to support faster growth without the structure, governance, or capability to keep pace. This service clarifies what HR should own, how it should operate, and how it can create measurable value.',
        approach: [
          'Assess HR operating model maturity, role clarity, and service effectiveness.',
          'Redesign policies, workflows, decision rights, and people governance.',
          'Build practical toolkits, templates, and leadership-ready recommendations.',
          'Support implementation with stakeholder alignment and change guidance.'
        ],
        outcomes: [
          'Clearer HR operating model and service catalogue.',
          'Sharper governance for people decisions.',
          'Better leadership confidence in HR delivery.',
          'Practical roadmaps for sustainable improvement.'
        ]
      },
      ar: {
        title: 'الخدمات الاستشارية',
        kicker: 'فاعلية وظيفة الموارد البشرية',
        lede: 'استشارات موارد بشرية استراتيجية للمنظمات التي تحتاج إلى هياكل أوضح وأنظمة أفراد أكثر فاعلية ووظيفة رأس مال بشري أكثر تأثيراً.',
        visual: 'تصميم وظيفة الموارد البشرية كنظام أداء.',
        promise: 'نساعد إدارات الموارد البشرية على الانتقال من تقديم خدمات تفاعلية إلى تمكين استراتيجي عبر نماذج تشغيل وسياسات وأدوات قابلة للاستخدام.',
        fit: 'مناسبة للمنظمات التي تراجع فاعلية الموارد البشرية أو تعيد هيكلة وظيفة الأفراد أو تستعد للنمو والتحول والتوسع الإقليمي.',
        solve: 'تُطلب من فرق الموارد البشرية أحياناً مواكبة نمو أسرع دون هيكل أو حوكمة أو قدرات كافية. توضح هذه الخدمة ما يجب أن تملكه الموارد البشرية وكيف تعمل وكيف تصنع قيمة قابلة للقياس.',
        approach: [
          'تقييم نضج نموذج تشغيل الموارد البشرية ووضوح الأدوار وفاعلية الخدمات.',
          'إعادة تصميم السياسات وسير العمل وحقوق القرار وحوكمة الأفراد.',
          'بناء أدوات وقوالب وتوصيات عملية مناسبة للقيادة.',
          'دعم التنفيذ من خلال مواءمة أصحاب المصلحة وتوجيه التغيير.'
        ],
        outcomes: [
          'نموذج تشغيل أوضح للموارد البشرية وخارطة خدمات محددة.',
          'حوكمة أقوى لقرارات الأفراد.',
          'ثقة أعلى من القيادة في أداء الموارد البشرية.',
          'خارطات طريق عملية للتحسين المستدام.'
        ]
      }
    },
    training: {
      no: '02',
      file: 'service-training-development.html',
      image: 'assets/images/services-hero.jpg?v=20260710servicepages',
      en: {
        title: 'Training and Development',
        kicker: 'Capability That Compounds',
        lede: 'Competency-based learning, coaching, and development journeys that strengthen leaders, teams, and critical capabilities.',
        visual: 'Turning learning into measurable capability.',
        promise: 'We design learning experiences that are practical, contextual, and directly connected to the performance outcomes your business needs.',
        fit: 'Best for leadership populations, high-potential groups, functional teams, and organizations building capability during transformation.',
        solve: 'Training often fails when it is generic, disconnected from real work, or delivered as a one-off event. We connect development to behavior, accountability, and business priorities.',
        approach: [
          'Define the competencies, behaviors, and performance standards required.',
          'Design learning journeys, coaching moments, and leader-led reinforcement.',
          'Deliver workshops, labs, and development conversations.',
          'Measure adoption through behavior shifts and manager feedback.'
        ],
        outcomes: [
          'Sharper leadership and team capability.',
          'Learning journeys aligned to real work.',
          'Improved confidence, accountability, and execution.',
          'Development plans leaders can sustain.'
        ]
      },
      ar: {
        title: 'التدريب والتطوير',
        kicker: 'قدرات تتراكم قيمتها',
        lede: 'رحلات تعلم وتدريب وتطوير قائمة على الكفاءات لتعزيز القادة والفرق والقدرات الحرجة.',
        visual: 'تحويل التعلم إلى قدرة قابلة للقياس.',
        promise: 'نصمم تجارب تعلم عملية ومرتبطة بالسياق ومتصلة مباشرة بمخرجات الأداء التي يحتاجها العمل.',
        fit: 'مناسبة للقيادات والمواهب الواعدة والفرق الوظيفية والمنظمات التي تبني القدرات أثناء التحول.',
        solve: 'يفشل التدريب غالباً عندما يكون عاماً أو منفصلاً عن العمل الحقيقي أو يقدم كحدث منفرد. نربط التطوير بالسلوك والمساءلة وأولويات العمل.',
        approach: [
          'تحديد الكفاءات والسلوكيات ومعايير الأداء المطلوبة.',
          'تصميم رحلات تعلم ولحظات تدريب وتعزيز يقوده القادة.',
          'تنفيذ ورش ومختبرات وجلسات تطوير.',
          'قياس التبني من خلال التحولات السلوكية وملاحظات المديرين.'
        ],
        outcomes: [
          'قدرات قيادية وفريقية أوضح وأقوى.',
          'رحلات تعلم مرتبطة بالعمل الحقيقي.',
          'ثقة ومساءلة وتنفيذ أفضل.',
          'خطط تطوير يستطيع القادة استدامتها.'
        ]
      }
    },
    assessment: {
      no: '03',
      file: 'service-assessment.html',
      image: 'assets/images/insight-4.jpg?v=20260710servicepages',
      en: {
        title: 'Assessment Service',
        kicker: 'Evidence-Based People Decisions',
        lede: 'Competency assessment and personality profiling solutions for recruitment, career development, succession, and self-awareness.',
        visual: 'Better decisions start with better insight.',
        promise: 'We help leaders understand capability, potential, fit, and development needs through structured assessment methods.',
        fit: 'Useful for selection, leadership development, promotion decisions, succession planning, and talent segmentation.',
        solve: 'Organizations often rely on instinct when making critical people decisions. Assessment creates a more objective view of strengths, risks, readiness, and growth potential.',
        approach: [
          'Define role requirements, competencies, and assessment criteria.',
          'Select or design tools such as interviews, simulations, profiles, and feedback reports.',
          'Facilitate assessments with clear scoring and governance.',
          'Translate results into development, selection, or succession actions.'
        ],
        outcomes: [
          'More confident recruitment and promotion decisions.',
          'Clearer individual development priorities.',
          'Reduced bias in talent conversations.',
          'Evidence-based succession and capability planning.'
        ]
      },
      ar: {
        title: 'خدمات التقييم',
        kicker: 'قرارات أفراد قائمة على الدليل',
        lede: 'حلول تقييم كفاءات وتحليل سمات شخصية للتوظيف والتطوير المهني والتعاقب والوعي الذاتي.',
        visual: 'تبدأ القرارات الأفضل برؤية أوضح.',
        promise: 'نساعد القادة على فهم القدرات والإمكانات والملاءمة واحتياجات التطوير من خلال أساليب تقييم منظمة.',
        fit: 'مناسبة للاختيار والتطوير القيادي وقرارات الترقية وتخطيط التعاقب وتقسيم المواهب.',
        solve: 'تعتمد المنظمات أحياناً على الانطباع عند اتخاذ قرارات أفراد حرجة. يوفر التقييم رؤية أكثر موضوعية للقوة والمخاطر والجاهزية وإمكانات النمو.',
        approach: [
          'تحديد متطلبات الدور والكفاءات ومعايير التقييم.',
          'اختيار أو تصميم أدوات مثل المقابلات والمحاكاة والملفات الشخصية وتقارير التغذية الراجعة.',
          'إدارة التقييمات بمنهجية واضحة للدرجات والحوكمة.',
          'ترجمة النتائج إلى إجراءات تطوير أو اختيار أو تعاقب.'
        ],
        outcomes: [
          'قرارات توظيف وترقية بثقة أعلى.',
          'أولويات تطوير فردية أكثر وضوحاً.',
          'تقليل التحيز في نقاشات المواهب.',
          'تخطيط تعاقب وقدرات قائم على الدليل.'
        ]
      }
    },
    recruitment: {
      no: '04',
      file: 'service-recruitment.html',
      image: 'assets/images/clients-hero.jpg?v=20260710servicepages',
      en: {
        title: 'Recruitment Service',
        kicker: 'The Right People for What Comes Next',
        lede: 'Recruitment, headhunting, and executive search support for organizations that need high-quality talent across sectors and markets.',
        visual: 'Finding leaders and specialists who can move the work.',
        promise: 'We combine role clarity, market intelligence, structured evaluation, and candidate care to help you secure stronger talent.',
        fit: 'Best for leadership roles, hard-to-fill specialist roles, growth hiring, and sensitive executive search assignments.',
        solve: 'Hiring slows down when roles are vague, markets are thin, or evaluation is inconsistent. We make the search sharper, more disciplined, and more aligned to future performance.',
        approach: [
          'Clarify role outcomes, leadership expectations, and selection criteria.',
          'Map the market and identify active and passive candidates.',
          'Screen, assess, and shortlist against agreed requirements.',
          'Support interviews, offers, and onboarding transition.'
        ],
        outcomes: [
          'Stronger candidate pipelines.',
          'Higher-quality shortlists.',
          'Improved hiring confidence and speed.',
          'Better fit between role, culture, and future needs.'
        ]
      },
      ar: {
        title: 'خدمات التوظيف',
        kicker: 'الأشخاص المناسبون للمرحلة القادمة',
        lede: 'دعم في التوظيف واستقطاب الكفاءات والبحث التنفيذي للمنظمات التي تحتاج إلى مواهب عالية الجودة عبر القطاعات والأسواق.',
        visual: 'إيجاد قادة ومتخصصين قادرين على تحريك العمل.',
        promise: 'نجمع بين وضوح الدور وذكاء السوق والتقييم المنظم والعناية بالمرشحين لمساعدتكم على استقطاب مواهب أقوى.',
        fit: 'مناسبة للأدوار القيادية والأدوار المتخصصة صعبة الاستقطاب والتوظيف للنمو ومهام البحث التنفيذي الحساسة.',
        solve: 'يتباطأ التوظيف عندما تكون الأدوار غير واضحة أو السوق محدوداً أو التقييم غير متسق. نجعل البحث أكثر دقة وانضباطاً وارتباطاً بالأداء المستقبلي.',
        approach: [
          'توضيح مخرجات الدور وتوقعات القيادة ومعايير الاختيار.',
          'رسم خريطة السوق وتحديد المرشحين النشطين وغير النشطين.',
          'فرز وتقييم وبناء قوائم مختصرة وفق المتطلبات المتفق عليها.',
          'دعم المقابلات والعروض والانتقال إلى onboarding.'
        ],
        outcomes: [
          'قنوات مرشحين أقوى.',
          'قوائم مختصرة أعلى جودة.',
          'ثقة وسرعة أفضل في التوظيف.',
          'ملاءمة أقوى بين الدور والثقافة واحتياجات المستقبل.'
        ]
      }
    },
    conscious: {
      no: '05',
      file: 'service-conscious-business.html',
      image: 'assets/images/insight-6.jpg?v=20260710servicepages',
      en: {
        title: 'Conscious Business Services',
        kicker: 'Purpose-Led Performance',
        lede: 'Advisory solutions that unlock consciousness in organizations, transform leaders, deepen engagement, and activate human potential.',
        visual: 'Building organizations with intention, awareness, and impact.',
        promise: 'We help organizations create more conscious leadership systems where purpose, behavior, culture, and performance reinforce each other.',
        fit: 'Useful for organizations seeking deeper engagement, values-led leadership, cultural renewal, and more human ways of working.',
        solve: 'Performance suffers when people cannot connect strategy to purpose, leadership behavior, or day-to-day meaning. Conscious business work reconnects the system.',
        approach: [
          'Explore purpose, values, leadership behaviors, and cultural signals.',
          'Facilitate leadership reflection, alignment, and team dialogue.',
          'Design rituals, practices, and narratives that reinforce conscious behavior.',
          'Embed accountability through engagement and culture measures.'
        ],
        outcomes: [
          'Clearer connection between purpose and performance.',
          'More self-aware leadership behaviors.',
          'Higher engagement and trust.',
          'Culture practices that sustain human potential.'
        ]
      },
      ar: {
        title: 'خدمات الأعمال الواعية',
        kicker: 'أداء تقوده الغاية',
        lede: 'حلول استشارية تطلق الوعي داخل المنظمات وتحول القادة وتعمق المشاركة وتفعل الإمكانات البشرية.',
        visual: 'بناء منظمات تعمل بوعي وغاية وأثر.',
        promise: 'نساعد المنظمات على خلق أنظمة قيادة أكثر وعياً حيث تعزز الغاية والسلوك والثقافة والأداء بعضها بعضاً.',
        fit: 'مناسبة للمنظمات التي تسعى إلى مشاركة أعمق وقيادة قائمة على القيم وتجديد ثقافي وطرق عمل أكثر إنسانية.',
        solve: 'يتأثر الأداء عندما لا يستطيع الأفراد ربط الاستراتيجية بالغاية أو السلوك القيادي أو المعنى اليومي. يعيد عمل الأعمال الواعية وصل النظام.',
        approach: [
          'استكشاف الغاية والقيم والسلوكيات القيادية وإشارات الثقافة.',
          'تيسير التأمل القيادي والمواءمة وحوار الفرق.',
          'تصميم ممارسات وروايات تعزز السلوك الواعي.',
          'ترسيخ المساءلة من خلال مقاييس المشاركة والثقافة.'
        ],
        outcomes: [
          'صلة أوضح بين الغاية والأداء.',
          'سلوكيات قيادية أكثر وعياً بالذات.',
          'مشاركة وثقة أعلى.',
          'ممارسات ثقافية تستدام بها الإمكانات البشرية.'
        ]
      }
    },
    speaking: {
      no: '06',
      file: 'service-public-speaking.html',
      image: 'assets/images/insights-feature.jpg?v=20260710servicepages',
      en: {
        title: 'Public Speaking Services',
        kicker: 'Messages That Move People',
        lede: 'Motivational, humanitarian, business, customer service, and large-group communication experiences designed to inspire action.',
        visual: 'Turning complex messages into moments people remember.',
        promise: 'We craft and deliver speaking experiences that connect emotionally, clarify priorities, and energize people around change.',
        fit: 'Useful for conferences, leadership offsites, town halls, customer service events, transformation launches, and culture programs.',
        solve: 'Important messages often lose impact when they are too abstract, too corporate, or too disconnected from people. We shape communication that lands.',
        approach: [
          'Clarify audience, message intent, and desired behavioral outcome.',
          'Develop narrative flow, examples, stories, and interaction moments.',
          'Deliver keynote, facilitation, or panel formats suited to the event.',
          'Support leaders with messaging, rehearsal, and audience engagement.'
        ],
        outcomes: [
          'Clearer strategic and cultural messaging.',
          'More memorable leadership communication.',
          'Stronger energy around change and service.',
          'Events that feel purposeful, polished, and human.'
        ]
      },
      ar: {
        title: 'خدمات التحدث العام',
        kicker: 'رسائل تحرك الناس',
        lede: 'تجارب تحدث تحفيزية وإنسانية وتجارية وخدمية وتواصلية للمجموعات الكبيرة مصممة لإلهام الفعل.',
        visual: 'تحويل الرسائل المعقدة إلى لحظات لا تُنسى.',
        promise: 'نصمم ونقدم تجارب تحدث ترتبط عاطفياً وتوضح الأولويات وتنشط الأفراد حول التغيير.',
        fit: 'مناسبة للمؤتمرات ولقاءات القيادة والاجتماعات العامة وفعاليات خدمة العملاء وإطلاق التحولات وبرامج الثقافة.',
        solve: 'تفقد الرسائل المهمة أثرها عندما تكون مجردة أو مؤسسية أكثر من اللازم أو منفصلة عن الناس. نشكل تواصلاً يصل بوضوح.',
        approach: [
          'توضيح الجمهور وهدف الرسالة والسلوك المطلوب.',
          'تطوير السرد والأمثلة والقصص ولحظات التفاعل.',
          'تقديم كلمات أو تيسير أو جلسات حوار بحسب طبيعة الحدث.',
          'دعم القادة في الرسائل والتدريب والتفاعل مع الجمهور.'
        ],
        outcomes: [
          'رسائل استراتيجية وثقافية أوضح.',
          'تواصل قيادي أكثر رسوخاً في الذاكرة.',
          'طاقة أقوى حول التغيير والخدمة.',
          'فعاليات هادفة ومصقولة وإنسانية.'
        ]
      }
    },
    global: {
      no: '07',
      file: 'service-global-assignment.html',
      image: 'assets/images/insight-3.jpg?v=20260710servicepages',
      en: {
        title: 'Global Assignment Services',
        kicker: 'Mobility Without Friction',
        lede: 'Consultancy for medium and large organizations managing travelling staff, international assignments, and globally distributed employees.',
        visual: 'Designing mobility experiences that protect people and performance.',
        promise: 'We help organizations create structured, compliant, and human-centered approaches to global assignments and travelling employee needs.',
        fit: 'Best for regional businesses, multinational teams, project-based mobility, and organizations managing employees across borders.',
        solve: 'Global assignments carry operational, cultural, compliance, cost, and wellbeing risks. A clear mobility system reduces uncertainty for the organization and the employee.',
        approach: [
          'Review assignment policy, eligibility, approvals, and support models.',
          'Map employee experience from selection to return or localization.',
          'Define governance, communication, vendor coordination, and risk controls.',
          'Support leaders and employees through key assignment moments.'
        ],
        outcomes: [
          'Clearer global assignment policies.',
          'Reduced mobility risk and ambiguity.',
          'Better employee and family experience.',
          'More consistent cost and governance controls.'
        ]
      },
      ar: {
        title: 'خدمات الإسناد العالمي',
        kicker: 'تنقل بلا احتكاك',
        lede: 'استشارات للمنظمات المتوسطة والكبيرة التي تدير موظفين متنقلين ومهام دولية وفرقاً موزعة عالمياً.',
        visual: 'تصميم تجارب تنقل تحمي الأفراد والأداء.',
        promise: 'نساعد المنظمات على بناء نهج منظم ومتوافق وإنساني للمهام العالمية واحتياجات الموظفين المتنقلين.',
        fit: 'مناسبة للأعمال الإقليمية والفرق متعددة الجنسيات والتنقل القائم على المشاريع والمنظمات التي تدير موظفين عبر الحدود.',
        solve: 'تحمل المهام العالمية مخاطر تشغيلية وثقافية وامتثالية وتكلفة ورفاه. يقلل نظام التنقل الواضح الغموض للمنظمة والموظف.',
        approach: [
          'مراجعة سياسات الإسناد والأهلية والموافقات ونماذج الدعم.',
          'رسم تجربة الموظف من الاختيار إلى العودة أو التوطين.',
          'تحديد الحوكمة والتواصل وتنسيق الموردين وضوابط المخاطر.',
          'دعم القادة والموظفين في لحظات المهمة الأساسية.'
        ],
        outcomes: [
          'سياسات إسناد عالمي أكثر وضوحاً.',
          'تقليل مخاطر التنقل والغموض.',
          'تجربة أفضل للموظف والعائلة.',
          'ضوابط تكلفة وحوكمة أكثر اتساقاً.'
        ]
      }
    },
    wellbeing: {
      no: '08',
      file: 'service-wellbeing.html',
      image: 'assets/images/insight-5.jpg?v=20260710servicepages',
      en: {
        title: 'Corporate Wellbeing Programs',
        kicker: 'Wellbeing Designed for Work',
        lede: 'Corporate wellbeing programs tailored to your people, culture, work realities, and organizational performance needs.',
        visual: 'Wellbeing that supports resilience, energy, and execution.',
        promise: 'We help organizations move from isolated wellbeing activities to integrated programs that support sustainable performance.',
        fit: 'Useful for organizations facing burnout, engagement pressure, heavy change, leadership fatigue, or rising wellbeing expectations.',
        solve: 'Wellbeing efforts can become fragmented perks when they are not tied to work design, leadership behavior, and culture. We design programs that fit the real system.',
        approach: [
          'Assess wellbeing needs, risk factors, and employee experience signals.',
          'Design program pillars, governance, communications, and leader practices.',
          'Create initiatives for resilience, energy, connection, and psychological safety.',
          'Measure participation, sentiment, and performance-adjacent indicators.'
        ],
        outcomes: [
          'A wellbeing strategy linked to business reality.',
          'Healthier leadership and team routines.',
          'Better resilience through change.',
          'Measurable participation and employee sentiment.'
        ]
      },
      ar: {
        title: 'برامج الرفاه المؤسسي',
        kicker: 'رفاه مصمم للعمل',
        lede: 'برامج رفاه مؤسسي مصممة وفق أفرادكم وثقافتكم وواقع العمل واحتياجات الأداء المؤسسي.',
        visual: 'رفاه يدعم المرونة والطاقة والتنفيذ.',
        promise: 'نساعد المنظمات على الانتقال من أنشطة رفاه متفرقة إلى برامج متكاملة تدعم الأداء المستدام.',
        fit: 'مناسبة للمنظمات التي تواجه الاحتراق الوظيفي أو ضغط المشاركة أو كثافة التغيير أو إرهاق القيادة أو ارتفاع توقعات الرفاه.',
        solve: 'قد تتحول جهود الرفاه إلى مزايا متفرقة إذا لم ترتبط بتصميم العمل والسلوك القيادي والثقافة. نصمم برامج تناسب النظام الحقيقي.',
        approach: [
          'تقييم احتياجات الرفاه وعوامل الخطر وإشارات تجربة الموظف.',
          'تصميم محاور البرنامج والحوكمة والتواصل وممارسات القادة.',
          'إنشاء مبادرات للمرونة والطاقة والترابط والسلامة النفسية.',
          'قياس المشاركة والانطباع والمؤشرات المرتبطة بالأداء.'
        ],
        outcomes: [
          'استراتيجية رفاه مرتبطة بواقع العمل.',
          'روتينات قيادية وفريقية أكثر صحة.',
          'مرونة أفضل أثناء التغيير.',
          'مشاركة وانطباع موظفين قابلان للقياس.'
        ]
      }
    },
    compliance: {
      no: '09',
      file: 'service-compliance.html',
      image: 'assets/images/insight-2.jpg?v=20260710servicepages',
      en: {
        title: 'Compliance Programs',
        kicker: 'Ethics Embedded in the System',
        lede: 'Bespoke compliance programs for code of ethics, business conduct, policy design, implementation, and best-practice adoption.',
        visual: 'Turning compliance from a document into daily behavior.',
        promise: 'We help organizations design practical compliance systems that people understand, leaders reinforce, and governance can rely on.',
        fit: 'Best for organizations refreshing ethics frameworks, preparing for growth, strengthening conduct controls, or aligning teams to market best practice.',
        solve: 'Compliance fails when policies sit outside behavior, leadership routines, and business decisions. We connect standards to practical choices and accountability.',
        approach: [
          'Audit current policies, controls, awareness, and conduct risks.',
          'Design or refresh codes, programs, training, and reporting channels.',
          'Support implementation through communications, leadership alignment, and governance.',
          'Define measures, ownership, and improvement cycles.'
        ],
        outcomes: [
          'Clearer ethics and conduct frameworks.',
          'Practical compliance training and communication.',
          'Improved governance and ownership.',
          'Reduced ambiguity in sensitive decisions.'
        ]
      },
      ar: {
        title: 'برامج الامتثال',
        kicker: 'أخلاقيات راسخة في النظام',
        lede: 'برامج امتثال مخصصة لمدونة الأخلاقيات وسلوك الأعمال وتصميم السياسات والتنفيذ وتبني أفضل الممارسات.',
        visual: 'تحويل الامتثال من وثيقة إلى سلوك يومي.',
        promise: 'نساعد المنظمات على تصميم أنظمة امتثال عملية يفهمها الأفراد ويعززها القادة وتعتمد عليها الحوكمة.',
        fit: 'مناسبة للمنظمات التي تجدد أطر الأخلاقيات أو تستعد للنمو أو تعزز ضوابط السلوك أو توائم الفرق مع أفضل ممارسات السوق.',
        solve: 'يفشل الامتثال عندما تبقى السياسات خارج السلوك والروتين القيادي وقرارات العمل. نربط المعايير بالاختيارات العملية والمساءلة.',
        approach: [
          'مراجعة السياسات والضوابط والوعي ومخاطر السلوك الحالية.',
          'تصميم أو تحديث المدونات والبرامج والتدريب وقنوات الإبلاغ.',
          'دعم التنفيذ عبر التواصل ومواءمة القيادة والحوكمة.',
          'تحديد المقاييس والملكية ودورات التحسين.'
        ],
        outcomes: [
          'أطر أخلاقيات وسلوك أوضح.',
          'تدريب وتواصل امتثال عملي.',
          'حوكمة وملكية أفضل.',
          'تقليل الغموض في القرارات الحساسة.'
        ]
      }
    },
    events: {
      no: '10',
      file: 'service-csr-events.html',
      image: 'assets/images/about-hero.jpg?v=20260710servicepages',
      en: {
        title: 'Corporate, CSR and Well-Being Events',
        kicker: 'Experiences With a Human Point',
        lede: 'Design, organization, and management of corporate team-building, CSR, and wellbeing events for small and large groups.',
        visual: 'Creating moments that connect people to purpose and each other.',
        promise: 'We create purposeful experiences that feel polished, human, and connected to your culture, brand, and transformation goals.',
        fit: 'Best for leadership gatherings, CSR programs, team-building, wellbeing activations, recognition moments, and culture events.',
        solve: 'Events can consume energy without creating lasting value. We design experiences around behavior, connection, reflection, and follow-through.',
        approach: [
          'Clarify event objectives, audience needs, and experience principles.',
          'Design content, flow, activities, facilitation, and communications.',
          'Manage planning, partners, delivery, and participant experience.',
          'Capture insights, commitments, and post-event momentum.'
        ],
        outcomes: [
          'Events that feel premium and purposeful.',
          'Stronger team connection and engagement.',
          'CSR and wellbeing moments aligned to culture.',
          'Clear takeaways that last beyond the event.'
        ]
      },
      ar: {
        title: 'فعاليات الشركات والمسؤولية المجتمعية والرفاه',
        kicker: 'تجارب ذات معنى إنساني',
        lede: 'تصميم وتنظيم وإدارة فعاليات بناء الفرق والمسؤولية المجتمعية والرفاه للمجموعات الصغيرة والكبيرة.',
        visual: 'خلق لحظات تربط الناس بالغاية وببعضهم.',
        promise: 'نصمم تجارب هادفة ومصقولة وإنسانية ومرتبطة بثقافتكم وعلامتكم وأهداف التحول.',
        fit: 'مناسبة للقاءات القيادة وبرامج المسؤولية المجتمعية وبناء الفرق وتفعيل الرفاه ولحظات التقدير وفعاليات الثقافة.',
        solve: 'قد تستهلك الفعاليات طاقة دون خلق قيمة مستدامة. نصمم التجارب حول السلوك والترابط والتأمل والمتابعة.',
        approach: [
          'توضيح أهداف الفعالية واحتياجات الجمهور ومبادئ التجربة.',
          'تصميم المحتوى والتدفق والأنشطة والتيسير والتواصل.',
          'إدارة التخطيط والشركاء والتنفيذ وتجربة المشاركين.',
          'التقاط الرؤى والالتزامات والزخم بعد الفعالية.'
        ],
        outcomes: [
          'فعاليات فاخرة وهادفة.',
          'ترابط ومشاركة أقوى بين الفرق.',
          'لحظات مسؤولية ورفاه متوافقة مع الثقافة.',
          'مخرجات واضحة تستمر بعد الحدث.'
        ]
      }
    },
    software: {
      no: '11',
      file: 'service-software-consultancy.html',
      image: 'assets/images/insight-4.jpg?v=20260710servicepages',
      en: {
        title: 'Software Consultancy',
        kicker: 'Digital Solutions for Human Capital',
        lede: 'Design, development, and implementation guidance for IT solutions that support business, people, and operational needs.',
        visual: 'Making technology serve the operating model, not the other way around.',
        promise: 'We help organizations clarify requirements, select or shape solutions, and implement technology in a way people can adopt.',
        fit: 'Useful for HR systems, workflow digitization, reporting tools, employee experience platforms, and custom business solutions.',
        solve: 'Technology underperforms when requirements are unclear, processes are broken, or adoption is treated as an afterthought. We connect digital tools to real work.',
        approach: [
          'Clarify business needs, users, workflows, and decision requirements.',
          'Shape solution options, requirements, and implementation priorities.',
          'Support vendor, build, configuration, and testing conversations.',
          'Guide adoption, training, governance, and continuous improvement.'
        ],
        outcomes: [
          'Clearer technology requirements and priorities.',
          'Solutions aligned to people and process realities.',
          'Improved adoption and workflow clarity.',
          'Better reporting, governance, and service experience.'
        ]
      },
      ar: {
        title: 'استشارات البرمجيات',
        kicker: 'حلول رقمية لرأس المال البشري',
        lede: 'توجيه في تصميم وتطوير وتنفيذ حلول تقنية معلومات تدعم احتياجات العمل والأفراد والتشغيل.',
        visual: 'جعل التقنية تخدم نموذج التشغيل لا العكس.',
        promise: 'نساعد المنظمات على توضيح المتطلبات واختيار أو تشكيل الحلول وتنفيذ التقنية بطريقة يستطيع الأفراد تبنيها.',
        fit: 'مناسبة لأنظمة الموارد البشرية ورقمنة سير العمل وأدوات التقارير ومنصات تجربة الموظف والحلول التجارية المخصصة.',
        solve: 'تتراجع فاعلية التقنية عندما تكون المتطلبات غير واضحة أو العمليات مكسورة أو التبني فكرة لاحقة. نربط الأدوات الرقمية بالعمل الحقيقي.',
        approach: [
          'توضيح احتياجات العمل والمستخدمين وسير العمل ومتطلبات القرار.',
          'تشكيل خيارات الحلول والمتطلبات وأولويات التنفيذ.',
          'دعم حوارات الموردين والبناء والتهيئة والاختبار.',
          'توجيه التبني والتدريب والحوكمة والتحسين المستمر.'
        ],
        outcomes: [
          'متطلبات وأولويات تقنية أوضح.',
          'حلول متوافقة مع واقع الأفراد والعمليات.',
          'تبنٍ أفضل ووضوح أكبر في سير العمل.',
          'تقارير وحوكمة وتجربة خدمة أفضل.'
        ]
      }
    }
  };

  const order = Object.keys(services);

  const getLanguage = () => {
    const urlLang = new URLSearchParams(window.location.search).get('lang');
    if (urlLang === 'ar') return 'ar';
    if (urlLang === 'en') return 'en';
    try {
      return window.localStorage.getItem('impact-hcc-lang') === 'ar' ? 'ar' : 'en';
    } catch {
      return document.documentElement.lang === 'ar' ? 'ar' : 'en';
    }
  };

  const renderList = (items) => items.map((item) => `<li>${item}</li>`).join('');

  const getTitleLines = (title) => {
    const words = title.trim().split(/\s+/);
    if (words.length <= 3) return [title];
    if (words.length <= 5) {
      const midpoint = Math.ceil(words.length / 2);
      return [words.slice(0, midpoint).join(' '), words.slice(midpoint).join(' ')];
    }
    return [
      words.slice(0, 3).join(' '),
      words.slice(3, 6).join(' '),
      words.slice(6).join(' ')
    ].filter(Boolean);
  };

  const renderProcess = (lang) => processSteps[lang].map((step) => `
    <article class="detail-process__step">
      <span>${step[0]}</span>
      <h3>${step[1]}</h3>
      <p>${step[2]}</p>
    </article>
  `).join('');

  const renderNext = (slug, lang) => {
    const index = order.indexOf(slug);
    const previous = services[order[(index - 1 + order.length) % order.length]];
    const next = services[order[(index + 1) % order.length]];
    const t = labels[lang];
    return `
      <nav class="detail-next" aria-label="Service navigation" data-reveal="scale">
        <a href="${previous.file}${lang === 'ar' ? '?lang=ar' : ''}">
          <span>${t.prev}</span>
          <strong>${previous[lang].title}</strong>
        </a>
        <a href="${next.file}${lang === 'ar' ? '?lang=ar' : ''}">
          <span>${t.next}</span>
          <strong>${next[lang].title}</strong>
        </a>
      </nav>
    `;
  };

  const activateMotion = () => {
    requestAnimationFrame(() => {
      root.querySelectorAll('[data-reveal], [data-reveal-stagger], .reveal-lines').forEach((el, index) => {
        window.setTimeout(() => el.classList.add('in'), 70 + index * 45);
      });
      if (window.impactInitPremiumMotion) window.impactInitPremiumMotion(root);
    });
  };

  const render = (requestedLang) => {
    const slug = document.body.dataset.service;
    const service = services[slug] || services.consultancy;
    const lang = requestedLang === 'ar' ? 'ar' : getLanguage();
    const content = service[lang] || service.en;
    const t = labels[lang];
    const langQuery = lang === 'ar' ? '?lang=ar' : '';

    document.title = `${content.title} — IMPACT-HCC`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', content.lede);

    root.innerHTML = `
      <section class="detail-hero" style="--detail-image: url('${service.image}')">
        <div class="wrap detail-hero__grid">
          <div class="detail-hero__copy">
            <a class="detail-back" href="services.html${langQuery}">${t.back}</a>
            <p class="eyebrow" data-reveal>${t.visual} ${service.no}</p>
            <h1 class="display reveal-lines">
              ${getTitleLines(content.title).map((line) => `<span class="line"><span>${line}</span></span>`).join('')}
            </h1>
            <p class="detail-hero__lede" data-reveal>${content.lede}</p>
            <div class="detail-actions" data-reveal>
              <a class="btn" href="contact.html${langQuery}" data-magnetic><span>${t.ctaButton} <i class="arw">→</i></span></a>
              <a class="btn btn--ghostDark" href="services.html${langQuery}"><span>${t.all} <i class="arw">→</i></span></a>
            </div>
          </div>
          <aside class="detail-hero__visual" data-tilt data-reveal="scale">
            <img src="${service.image}" alt="" loading="eager" />
            <span class="detail-orbit" aria-hidden="true"></span>
            <div class="detail-visual__copy">
              <span>${content.kicker}</span>
              <p>${content.visual}</p>
            </div>
          </aside>
        </div>
      </section>

      <section class="detail-body">
        <div class="wrap">
          <div class="detail-index" data-reveal-stagger>
            <div class="detail-index__item"><span>${t.promise}</span><strong>${content.kicker}</strong></div>
            <div class="detail-index__item"><span>${t.fit}</span><strong>${content.fit}</strong></div>
            <div class="detail-index__item"><span>${t.outcomes}</span><strong>${content.outcomes[0]}</strong></div>
          </div>

          <div class="detail-content-grid">
            <article class="detail-panel" data-tilt data-reveal="fade-left">
              <span class="eyebrow">${t.promise}</span>
              <h2 class="display">${content.kicker}</h2>
              <p>${content.promise}</p>
            </article>

            <article class="detail-panel detail-panel--dark" data-tilt data-reveal="fade-right">
              <span class="eyebrow eyebrow--onDark">${t.solve}</span>
              <h2 class="display">${t.solve}</h2>
              <p>${content.solve}</p>
            </article>

            <article class="detail-panel" data-tilt data-reveal="scale">
              <span class="eyebrow">${t.approach}</span>
              <h2 class="display">${t.approach}</h2>
              <ul class="detail-list">${renderList(content.approach)}</ul>
            </article>

            <article class="detail-panel detail-panel--dark" data-tilt data-reveal="scale">
              <span class="eyebrow eyebrow--onDark">${t.outcomes}</span>
              <h2 class="display">${t.outcomes}</h2>
              <ul class="detail-list">${renderList(content.outcomes)}</ul>
            </article>

            <div class="detail-process" data-reveal-stagger>
              ${renderProcess(lang)}
            </div>
          </div>

          ${renderNext(slug, lang)}
        </div>
      </section>

      <section class="detail-cta">
        <div class="wrap detail-cta__inner" data-reveal="scale">
          <div>
            <h2 class="display">${t.ctaTitle}</h2>
            <p>${t.ctaCopy}</p>
          </div>
          <a class="btn" href="contact.html${langQuery}" data-magnetic><span>${t.ctaButton} <i class="arw">→</i></span></a>
        </div>
      </section>
    `;

    activateMotion();
  };

  render();
  window.addEventListener('impact:language-change', (event) => render(event.detail && event.detail.lang));
})();
