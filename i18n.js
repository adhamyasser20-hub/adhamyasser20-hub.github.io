/* Language switcher: English (source), Arabic (RTL), Spanish, French.
   Each entry: English text -> [Arabic, Spanish, French]. Edit translations here. */
(function(){
var L=['en','ar','es','fr'],NAMES={en:'English',ar:'العربية',es:'Español',fr:'Français'};
var D={
"Live on Kindle":["متاح على كيندل","Disponible en Kindle","Disponible sur Kindle"],
"Available now on Kindle":["متاح الآن على كيندل","Disponible ahora en Kindle","Disponible maintenant sur Kindle"],
"The phrasebook is now live on Kindle. Store links are added here as each book goes live.":["كتاب العبارات متاح الآن على كيندل. بنضيف روابط المتجر هنا أول ما كل كتاب ينزل.","El libro de frases ya está disponible en Kindle. Los enlaces a la tienda se añaden aquí cuando cada libro esté disponible.","Le guide de phrases est maintenant disponible sur Kindle. Les liens vers la boutique sont ajoutés ici dès que chaque livre est en ligne."],
"The phrasebook is live on Kindle and two more books are in review on Amazon. Next: more niches, and print editions.":["كتاب العبارات متاح على كيندل، وكتابان آخران قيد المراجعة على أمازون. الجاي: مجالات أكتر، ونسخ مطبوعة.","El libro de frases ya está en Kindle y otros dos libros están en revisión en Amazon. Siguiente: más nichos y ediciones impresas.","Le guide de phrases est disponible sur Kindle et deux autres livres sont en cours d'examen sur Amazon. Ensuite : d'autres niches et des éditions imprimées."],
"Digital products on Gumroad.":["منتجات رقمية على Gumroad.", "Productos digitales en Gumroad.", "Produits numériques sur Gumroad."],
"Arabic Excel templates and short ebooks, all in one store. Buy once and download right away.":["قوالب إكسل عربية وكتب إلكترونية قصيرة، كلها في متجر واحد. اشتري مرة واحدة ونزّل على طول.","Plantillas de Excel en árabe y ebooks cortos, todo en una tienda. Compra una vez y descarga al instante.","Modèles Excel en arabe et courts ebooks, tout dans une seule boutique. Achetez une fois et téléchargez tout de suite."],
"Visit the Gumroad store":["زور متجر Gumroad","Visitar la tienda de Gumroad","Visiter la boutique Gumroad"],
"Arabic Excel templates and short ebooks. Buy once and download right away.":["قوالب إكسل عربية وكتب إلكترونية قصيرة. اشتري مرة واحدة ونزّل على طول.", "Plantillas de Excel en árabe y ebooks cortos. Compra una vez y descarga al instante.", "Modèles Excel en arabe et courts ebooks. Achetez une fois et téléchargez tout de suite."],
"Excel template":["قالب إكسل", "Plantilla de Excel", "Modèle Excel"],
"EPUB ebook":["كتاب إلكتروني EPUB", "Ebook EPUB", "Ebook EPUB"],
"Buy on Gumroad":["اشتري من Gumroad", "Comprar en Gumroad", "Acheter sur Gumroad"],
"Track rented units, tenants, payments and late rent in one Arabic Excel file.":["تابع الوحدات المؤجرة والمستأجرين والمدفوعات والإيجارات المتأخرة في ملف إكسل عربي واحد.", "Controla unidades alquiladas, inquilinos, pagos y alquileres atrasados en un solo archivo de Excel en árabe.", "Suivez les logements loués, les locataires, les paiements et les loyers en retard dans un seul fichier Excel en arabe."],
"Keep track of cash-on-delivery orders in one Arabic Excel file.":["تابع أوردرات الدفع عند الاستلام في ملف إكسل عربي واحد.", "Controla los pedidos con pago contra entrega en un solo archivo de Excel en árabe.", "Suivez les commandes payées à la livraison dans un seul fichier Excel en arabe."],
"A simple Arabic daybook for a shop's daily sales and expenses.":["دفتر عربي بسيط لمبيعات ومصروفات المحل اليومية.", "Un libro diario sencillo en árabe para las ventas y gastos diarios de una tienda.", "Un journal simple en arabe pour les ventes et les dépenses quotidiennes d'une boutique."],
"Work out the cost and the selling price of each menu item in Arabic Excel.":["احسب تكلفة وسعر بيع كل صنف في المنيو بإكسل عربي.", "Calcula el costo y el precio de venta de cada plato del menú en Excel en árabe.", "Calculez le coût et le prix de vente de chaque plat du menu dans Excel en arabe."],
"Plan the wedding budget and the guest list in one Arabic Excel file.":["خطط ميزانية الفرح وقائمة المدعوين في ملف إكسل عربي واحد.", "Planifica el presupuesto de la boda y la lista de invitados en un solo archivo de Excel en árabe.", "Planifiez le budget du mariage et la liste des invités dans un seul fichier Excel en arabe."],
"Real phrases for real situations, with simple pronunciation, as an EPUB ebook.":["جمل حقيقية لمواقف حقيقية، مع نطق بسيط، في كتاب EPUB.", "Frases reales para situaciones reales, con pronunciación sencilla, en un ebook EPUB.", "De vraies phrases pour de vraies situations, avec une prononciation simple, en ebook EPUB."],
"How much to tip, how to bargain and which scams to expect, as an EPUB ebook.":["كام تدّي بقشيش، وإزاي تفاصل، وإيه النصبات المتوقعة، في كتاب EPUB.", "Cuánta propina dar, cómo regatear y qué estafas esperar, en un ebook EPUB.", "Combien laisser en pourboire, comment marchander et quelles arnaques éviter, en ebook EPUB."],
"A step-by-step guide to tracking stock in Excel, for owners who are not technical.":["دليل خطوة بخطوة لمتابعة المخزون في إكسل، لأصحاب المحلات غير المتخصصين في التقنية.", "Una guía paso a paso para controlar el inventario en Excel, para dueños sin conocimientos técnicos.", "Un guide pas à pas pour suivre le stock dans Excel, pour les gérants sans connaissances techniques."],
"Four live sheets you can edit in your browser. Opens on its own page.":["أربع شيتات حيّة تعدّل فيها من المتصفح. بتفتح في صفحة لوحدها.", "Cuatro hojas en vivo que puedes editar en el navegador. Se abre en su propia página.", "Quatre feuilles en direct modifiables dans le navigateur. S'ouvre sur sa propre page."],
"Back to site":["الرجوع للموقع", "Volver al sitio", "Retour au site"],
"Excel demos":["شيتات إكسل التجريبية", "Demos de Excel", "Démos Excel"],
"Try the sheets yourself.":["جرّب الشيتات بنفسك.", "Prueba las hojas tú mismo.", "Essayez les feuilles vous-même."],
"Pick a sheet, change the numbers and watch the alerts and totals update.":["اختار شيت، غيّر الأرقام وشوف التنبيهات والإجماليات بتتحدث.", "Elige una hoja, cambia los números y mira cómo se actualizan las alertas y los totales.", "Choisissez une feuille, changez les chiffres et regardez les alertes et les totaux se mettre à jour."],
"Like what you see? The full sheets are 50 EGP each, and I can adjust one for your work.":["عجبك اللي شفته؟ الشيتات الكاملة بـ 50 جنيه الواحدة، وأقدر أعدّل واحدة على شغلك.", "¿Te gusta lo que ves? Las hojas completas cuestan 50 EGP cada una y puedo adaptar una a tu trabajo.", "Ça vous plaît ? Les feuilles complètes coûtent 50 EGP chacune, et je peux en adapter une à votre activité."],
"More details":["تفاصيل أكتر","Más detalles","Plus de détails"],
"Fewer details":["تفاصيل أقل","Menos detalles","Moins de détails"],
"Stock tracking with reorder alerts, rent and subscription trackers, freelance income sheets. Hover over a card to play the demo and flip it, or on a phone scroll to it and tap the arrow. Then open the live demo with the button below.":["تتبع المخزون مع تنبيهات إعادة الطلب، ومتابعة الإيجارات والاشتراكات، وشيتات دخل الفريلانس. مرّر المؤشر فوق البطاقة لتشغيل العرض وقلبها، أو على الموبايل اوصل لها واضغط على السهم. وبعدها افتح التجربة الحيّة بالزرار تحت.", "Control de stock con alertas de reposición, seguimiento de alquileres y suscripciones, y hojas de ingresos freelance. Pasa el cursor sobre una tarjeta para ver la demo y girarla, o en el móvil desplázate hasta ella y toca la flecha. Después abre la demo en vivo con el botón de abajo.", "Suivi de stock avec alertes de réapprovisionnement, suivi des loyers et abonnements, et feuilles de revenus freelance. Survolez une carte pour lancer la démo et la retourner, ou sur mobile faites défiler jusqu'à elle et touchez la flèche. Ensuite, ouvrez la démo en direct avec le bouton ci-dessous."],
"Get this sheet for 50 EGP":["احصل على الشيت بـ 50 جنيه","Consigue esta hoja por 50 EGP","Obtenez cette feuille pour 50 EGP"],
"These are the full Excel files, not the demo. Each sheet is 50 EGP, a symbolic price. Order on WhatsApp and I will send it to you directly.":["دي ملفات الإكسل الكاملة مش النسخة التجريبية. الشيت بـ 50 جنيه، سعر رمزي. اطلب على واتساب وأبعتهولك مباشرة.", "Estos son los archivos completos de Excel, no la demo. Cada hoja cuesta 50 EGP, un precio simbólico. Pídela por WhatsApp y te la envío directamente.", "Ce sont les fichiers Excel complets, pas la démo. Chaque feuille coûte 50 EGP, un prix symbolique. Commandez sur WhatsApp et je vous l'envoie directement."],
"50 EGP":["50 جنيه", "50 EGP", "50 EGP"],
"Bank transfer, InstaPay or PayPal. After you order, send the transfer and I deliver the file on WhatsApp.":["تحويل بنكي أو إنستا باي أو باي بال. بعد ما تطلب حوّل المبلغ وأبعتلك الملف على واتساب.", "Transferencia bancaria, InstaPay o PayPal. Después de pedir, haz la transferencia y te entrego el archivo por WhatsApp.", "Virement bancaire, InstaPay ou PayPal. Après votre commande, faites le virement et je livre le fichier sur WhatsApp."],
"Pay by bank transfer, InstaPay or PayPal. Contact me on WhatsApp and I send the payment details there, then deliver the file.":["ادفع بتحويل بنكي أو إنستا باي أو باي بال. كلمني على واتساب وأبعتلك بيانات الدفع هناك، وبعدها أسلمك الملف.", "Paga por transferencia bancaria, InstaPay o PayPal. Escríbeme por WhatsApp y te envío los datos de pago allí, luego te entrego el archivo.", "Payez par virement bancaire, InstaPay ou PayPal. Écrivez-moi sur WhatsApp et je vous envoie les détails de paiement là-bas, puis je livre le fichier."],
"Payment details are sent on WhatsApp after you contact me.":["بيانات الدفع بتتبعت على واتساب بعد ما تتواصل معايا.", "Los datos de pago se envían por WhatsApp después de contactarme.", "Les détails de paiement sont envoyés sur WhatsApp après votre contact."],
"Bank account":["الحساب البنكي", "Cuenta bancaria", "Compte bancaire"],
"InstaPay":["إنستا باي", "InstaPay", "InstaPay"],
"PayPal":["باي بال", "PayPal", "PayPal"],
"Freelance income":["دخل الفريلانس","Ingresos freelance","Revenus freelance"],
"Coming soon":["قريباً","Próximamente","Bientôt"],
"Get it on Kindle":["احصل عليه على كيندل", "Consíguelo en Kindle", "Obtenir sur Kindle"],
"Get the sheets":["احصل على الشيتات", "Consigue las hojas", "Obtenir les feuilles"],
"Stock alerts for small shops":["تنبيهات المخزون للمحلات الصغيرة", "Alertas de stock para tiendas pequeñas", "Alertes de stock pour petits commerces"],
"Due dates and late days":["مواعيد الدفع وأيام التأخير", "Fechas de pago y días de retraso", "Échéances et jours de retard"],
"Renewals and monthly cost":["التجديدات والتكلفة الشهرية", "Renovaciones y coste mensual", "Renouvellements et coût mensuel"],
"Income and client tracking":["متابعة الدخل والعملاء", "Seguimiento de ingresos y clientes", "Suivi des revenus et des clients"],
"Order on WhatsApp":["اطلب على واتساب", "Pedir por WhatsApp", "Commander sur WhatsApp"],
"Need it adjusted?":["محتاجه يتعدل؟", "¿Necesitas ajustes?", "Besoin d'adaptations ?"],
"Customizing a sheet for your own work is available. Small changes are simple, and extra additions raise the price a little.":["ممكن أعدّل الشيت مخصوص على شغلك. التعديلات البسيطة سهلة، والإضافات الزيادة بتزوّد السعر شوية.", "Puedo adaptar la hoja a tu trabajo. Los cambios pequeños son sencillos y las extras suben un poco el precio.", "Je peux adapter la feuille à votre activité. Les petits changements sont simples, et les ajouts supplémentaires augmentent un peu le prix."],
"Ask for a custom sheet":["اطلب شيت مخصص", "Pedir una hoja a medida", "Demander une feuille sur mesure"],
"How to pay":["طريقة الدفع", "Cómo pagar", "Comment payer"],
"About":["نبذة","Sobre mí","À propos"],
"Books":["الكتب","Libros","Livres"],
"Excel":["إكسل","Excel","Excel"],
"Videos":["الفيديوهات","Vídeos","Vidéos"],
"Affiliate":["الأفلييت","Afiliados","Affiliation"],
"Marketing":["التسويق","Marketing","Marketing"],
"Plans":["الخطط","Planes","Projets"],
"Contact":["تواصل","Contacto","Contact"],
"Alexandria, Egypt · building in public":["الإسكندرية، مصر · أبني أمام الجميع","Alejandría, Egipto · construyendo en público","Alexandrie, Égypte · je construis en public"],
"Adham Yasser":["أدهم ياسر","Adham Yasser","Adham Yasser"],
"I make":["أصنع","Hago","Je crée"],
"and small things that earn.":["وأشياء صغيرة تُدِرّ دخلاً.","y cosas pequeñas que generan ingresos.","et de petites choses qui rapportent."],
"Kindle books, Excel tools for shops, story videos and online experiments. One step at a time, all in the open.":["كتب كيندل، وأدوات إكسل للمحلات، وفيديوهات حكايات، وتجارب على الإنترنت. خطوة بخطوة، وكل شيء بوضوح.","Libros Kindle, herramientas de Excel para tiendas, vídeos de historias y experimentos en línea. Paso a paso y a la vista de todos.","Livres Kindle, outils Excel pour les commerces, vidéos d'histoires et expériences en ligne. Un pas à la fois, en toute transparence."],
"See the work":["شاهد أعمالي","Ver mi trabajo","Voir mon travail"],
"Where this is going":["إلى أين أتجه","Hacia dónde voy","Où je vais"],
"Video":["فيديو","Vídeo","Vidéo"],
"Kindle books":["كتب كيندل","Libros Kindle","Livres Kindle"],
"Excel tools":["أدوات إكسل","Herramientas de Excel","Outils Excel"],
"Story videos":["فيديوهات حكايات","Vídeos de historias","Vidéos d'histoires"],
"Warehouse know-how":["خبرة المخازن","Experiencia en almacenes","Savoir-faire en entrepôt"],
"Excel demo videos":["فيديوهات إكسل تجريبية","Vídeos demo de Excel","Vidéos de démo Excel"],
"Project areas":["مجالات المشاريع","Áreas de proyecto","Domaines de projets"],
"Started":["بدأت","Desde","Depuis"],
"About me":["عني","Sobre mí","À propos de moi"],
"Practical by habit, curious by choice.":["عملي بالعادة، وفضولي بالاختيار.","Práctico por costumbre, curioso por elección.","Pratique par habitude, curieux par choix."],
"I'm Adham, from Alexandria. My day job is in purchasing and warehouse management, so I spend my time with stock sheets, suppliers and numbers that have to add up.":["أنا أدهم من الإسكندرية. شغلي الأساسي في المشتريات وإدارة المخازن، فوقتي بين شيتات المخزون والموردين وأرقام لازم تتطابق.","Soy Adham, de Alejandría. Mi trabajo diario es de compras y gestión de almacén, así que paso el tiempo entre hojas de stock, proveedores y números que tienen que cuadrar.","Je suis Adham, d'Alexandrie. Mon travail est dans les achats et la gestion d'entrepôt : je passe mon temps entre feuilles de stock, fournisseurs et chiffres qui doivent tomber juste."],
"On the side I build things: Excel workbooks with Arabic interfaces, books for travelers and shop owners, and story videos. I use AI tools along the way and check the result myself before anything goes out.":["إلى جانب ذلك أصنع أشياء: ملفات إكسل بواجهات عربية، وكتب للمسافرين وأصحاب المحلات، وفيديوهات حكايات. أستخدم أدوات الذكاء الاصطناعي في الطريق، وأراجع النتيجة بنفسي قبل نشر أي شيء.","Por mi cuenta creo cosas: libros de Excel con interfaz en árabe, libros para viajeros y dueños de tiendas, y vídeos de historias. Uso herramientas de IA y reviso yo mismo el resultado antes de publicar nada.","À côté, je crée des choses : des classeurs Excel avec interface en arabe, des livres pour les voyageurs et les commerçants, et des vidéos d'histoires. J'utilise des outils d'IA et je vérifie moi-même le résultat avant toute publication."],
"The idea is simple. Make small useful things, put them out, learn from what happens, and make the next one better.":["الفكرة بسيطة: أصنع أشياء صغيرة مفيدة، وأنشرها، وأتعلم مما يحدث، وأجعل التالية أفضل.","La idea es simple: hacer cosas pequeñas y útiles, publicarlas, aprender de lo que pasa y mejorar la siguiente.","L'idée est simple : faire de petites choses utiles, les publier, apprendre de ce qui se passe et améliorer la suivante."],
"Purchasing":["المشتريات","Compras","Achats"],
"Warehouse management":["إدارة المخازن","Gestión de almacén","Gestion d'entrepôt"],
"Excel and Sheets":["إكسل وجداول جوجل","Excel y Sheets","Excel et Sheets"],
"Python and n8n":["بايثون وn8n","Python y n8n","Python et n8n"],
"Content and video":["المحتوى والفيديو","Contenido y vídeo","Contenu et vidéo"],
"Arabic and English":["العربية والإنجليزية","Árabe e inglés","Arabe et anglais"],
"Kindle books for travelers and shop owners.":["كتب كيندل للمسافرين وأصحاب المحلات.","Libros Kindle para viajeros y dueños de tiendas.","Livres Kindle pour voyageurs et commerçants."],
"Keep scrolling":["كمّل التمرير","Sigue desplazando","Continuez à faire défiler"],
"→":["←","→","→"],
"Kindle ebook":["كتاب كيندل","Ebook Kindle","Ebook Kindle"],
"In review":["قيد المراجعة","En revisión","En cours de revue"],
"Real phrases for real situations, with simple pronunciation. Cafes, taxis, hotels and your first day.":["جمل حقيقية لمواقف حقيقية مع نطق مبسّط. المقاهي والتاكسي والفنادق وأول يوم لك.","Frases reales para situaciones reales, con pronunciación sencilla. Cafés, taxis, hoteles y tu primer día.","De vraies phrases pour de vraies situations, avec une prononciation simple. Cafés, taxis, hôtels et votre premier jour."],
"A practical money handbook for first-time visitors: how much to tip, how to bargain, and which scams to expect.":["دليل عملي للأموال للزوار لأول مرة: كم تعطي بقشيش، وكيف تفاصل، وما هي عمليات الاحتيال المتوقعة.","Una guía práctica de dinero para quienes visitan por primera vez: cuánto dar de propina, cómo regatear y qué estafas esperar.","Un guide pratique sur l'argent pour les visiteurs : combien donner en pourboire, comment marchander et à quelles arnaques s'attendre."],
"Track stock, reorder points and stock value with a simple workbook, no software to buy.":["تابع المخزون ونقاط إعادة الطلب وقيمة المخزون بملف بسيط، بدون برامج تشتريها.","Controla el stock, los puntos de reposición y el valor del inventario con un libro sencillo, sin comprar software.","Suivez le stock, les seuils de réapprovisionnement et la valeur du stock avec un classeur simple, sans logiciel à acheter."],
"More on the way.":["المزيد في الطريق.","Más en camino.","D'autres arrivent."],
"All three books are in review on Amazon. Store links are added here as each one goes live.":["الكتب الثلاثة قيد المراجعة على أمازون. تُضاف روابط المتجر هنا عند نشر كل كتاب.","Los tres libros están en revisión en Amazon. Aquí se añadirán los enlaces de la tienda cuando se publique cada uno.","Les trois livres sont en cours de revue sur Amazon. Les liens vers la boutique seront ajoutés ici à mesure de leur publication."],
"Next: Excel tools":["التالي: أدوات إكسل","Siguiente: herramientas de Excel","Suite : outils Excel"],
"Excel and tools":["إكسل وأدوات","Excel y herramientas","Excel et outils"],
"Workbooks that do the boring part for you.":["ملفات تؤدي عنك الجزء الممل.","Libros de Excel que hacen la parte aburrida por ti.","Des classeurs qui font la partie ennuyeuse à votre place."],
"Stock tracking with reorder alerts, rent and subscription trackers, freelance income sheets. Hover or tap a card to play the demo, then try the sheets yourself below.":["متابعة المخزون مع تنبيهات إعادة الطلب، ومتابعة الإيجارات والاشتراكات، وشيتات دخل الفريلانس. مرّر المؤشر أو اضغط على البطاقة لتشغيل العرض، ثم جرّب الشيتات بنفسك بالأسفل.","Control de stock con alertas de reposición, seguimiento de alquileres y suscripciones, hojas de ingresos freelance. Pasa el cursor o toca una tarjeta para ver la demo y luego prueba las hojas tú mismo más abajo.","Suivi de stock avec alertes de réapprovisionnement, suivi des loyers et abonnements, feuilles de revenus freelance. Survolez ou touchez une carte pour lancer la démo, puis essayez les feuilles vous-même ci-dessous."],
"Inventory":["المخزون","Inventario","Inventaire"],
"live stock alerts":["تنبيهات المخزون المباشرة","alertas de stock en vivo","alertes de stock en direct"],
"Rent tracker":["متابعة الإيجارات","Control de alquileres","Suivi des loyers"],
"live edit":["تعديل مباشر","edición en vivo","modification en direct"],
"Subscriptions":["الاشتراكات","Suscripciones","Abonnements"],
"tracker":["متابعة","seguimiento","suivi"],
"Freelance":["الفريلانس","Freelance","Freelance"],
"income tracker":["متابعة الدخل","control de ingresos","suivi des revenus"],
"Try it yourself":["جرّبها بنفسك","Pruébalo tú mismo","Essayez vous-même"],
"Reset":["إعادة ضبط","Restablecer","Réinitialiser"],
"Swipe the table sideways to see all columns.":["اسحب الجدول جانبياً لرؤية كل الأعمدة.","Desliza la tabla hacia los lados para ver todas las columnas.","Faites glisser le tableau sur le côté pour voir toutes les colonnes."],
"Sample data, in Arabic like the real sheets. Your changes stay in this tab only and disappear when you reload. Nothing is saved, and the original files are not shared or downloadable.":["بيانات تجريبية بالعربية مثل الشيتات الحقيقية. تعديلاتك تبقى في هذه الصفحة فقط وتختفي عند إعادة التحميل. لا يتم حفظ أي شيء، والملفات الأصلية غير متاحة للمشاركة أو التنزيل.","Datos de ejemplo, en árabe como las hojas reales. Tus cambios se quedan solo en esta pestaña y desaparecen al recargar. No se guarda nada y los archivos originales no se comparten ni se pueden descargar.","Données d'exemple, en arabe comme les vraies feuilles. Vos modifications restent dans cet onglet et disparaissent au rechargement. Rien n'est enregistré, et les fichiers originaux ne sont ni partagés ni téléchargeables."],
"Change the current stock or the reorder point and watch the alert and the suggested order update.":["غيّر الرصيد الحالي أو حد إعادة الطلب وشاهد التنبيه والكمية المقترحة تتحدث.","Cambia el stock actual o el punto de reposición y mira cómo se actualizan la alerta y el pedido sugerido.","Modifiez le stock actuel ou le seuil de réapprovisionnement et regardez l'alerte et la commande suggérée se mettre à jour."],
"Change the months paid. Collected money, arrears and the late alert are recalculated.":["غيّر الشهور المدفوعة وسيُعاد حساب المبلغ المحصل والمتأخرات وتنبيه التأخير.","Cambia los meses pagados. El dinero cobrado, los atrasos y la alerta de retraso se recalculan.","Modifiez les mois payés. L'argent encaissé, les arriérés et l'alerte de retard sont recalculés."],
"Change the cost, the billing cycle, the days left or the status. The monthly equivalent and totals follow.":["غيّر التكلفة أو دورة الدفع أو الأيام المتبقية أو الحالة، ويتحدث المعادل الشهري والإجماليات.","Cambia el coste, el ciclo de pago, los días restantes o el estado. El equivalente mensual y los totales se actualizan.","Modifiez le coût, le cycle de facturation, les jours restants ou le statut. L'équivalent mensuel et les totaux suivent."],
"Change the agreed price, the collected money or the status. The remaining amount and the alert update.":["غيّر السعر المتفق عليه أو المبلغ المحصل أو الحالة، ويتحدث المتبقي والتنبيه.","Cambia el precio acordado, el dinero cobrado o el estado. El importe pendiente y la alerta se actualizan.","Modifiez le prix convenu, l'argent encaissé ou le statut. Le reste à encaisser et l'alerte se mettent à jour."],
"Set the due date. Days left or days late are counted for you. Press the paid button and the due date moves to next month.":["حدّد تاريخ الاستحقاق ويُحسب لك المتبقي أو أيام التأخير تلقائياً. اضغط زر \"تم الدفع\" فينتقل التاريخ إلى الشهر التالي.","Fija la fecha de vencimiento y se cuentan solos los días restantes o de retraso. Pulsa el botón de pagado y la fecha pasa al mes siguiente.","Indiquez l'échéance : les jours restants ou de retard sont comptés pour vous. Appuyez sur le bouton payé et l'échéance passe au mois suivant."],
"Set the renewal date. The days left count down on their own. Press the paid button and the renewal date moves ahead by one billing cycle.":["حدّد تاريخ التجديد وتنقص الأيام المتبقية تلقائياً. اضغط زر \"تم الدفع\" فينتقل التاريخ دورة دفع واحدة للأمام.","Fija la fecha de renovación y los días restantes bajan solos. Pulsa el botón de pagado y la fecha avanza un ciclo de pago.","Indiquez la date de renouvellement : les jours restants diminuent automatiquement. Appuyez sur le bouton payé et la date avance d'un cycle de facturation."],
"Late tenants":["مستأجرون متأخرون","Inquilinos con retraso","Locataires en retard"],
"Rent overdue":["إيجارات متأخرة","Alquiler vencido","Loyers en retard"],
"Due in 7 days":["تستحق خلال 7 أيام","Vencen en 7 días","Échéance sous 7 jours"],
"Items":["الأصناف","Artículos","Articles"],
"Need reorder":["تحتاج إعادة طلب","Por reponer","À réapprovisionner"],
"Total collected":["إجمالي المحصل","Total cobrado","Total encaissé"],
"Total arrears":["إجمالي المتأخرات","Total de atrasos","Total des arriérés"],
"Monthly total (active)":["الإجمالي الشهري (الفعال)","Total mensual (activas)","Total mensuel (actifs)"],
"Yearly total":["الإجمالي السنوي","Total anual","Total annuel"],
"Active":["فعالة","Activas","Actifs"],
"Agreed":["المتفق عليه","Acordado","Convenu"],
"Collected":["المحصل","Cobrado","Encaissé"],
"Still to collect":["المتبقي للتحصيل","Pendiente de cobro","Reste à encaisser"],
"Custom Excel cleanup and tracking sheets are also offered on freelance platforms.":["أقدّم أيضاً تنظيف ملفات إكسل وشيتات المتابعة المخصصة على منصات الفريلانس.","También ofrezco limpieza de Excel y hojas de seguimiento a medida en plataformas freelance.","Je propose aussi le nettoyage d'Excel et des feuilles de suivi sur mesure sur des plateformes freelance."],
"Story videos on YouTube.":["فيديوهات حكايات على يوتيوب.","Vídeos de historias en YouTube.","Vidéos d'histoires sur YouTube."],
"Arabic stories in Egyptian colloquial with Toto the bear and his friends. New episodes and full-story videos are added to the channel, and every episode ends on a cliffhanger.":["حكايات بالعامية المصرية مع الدب توتو وصحابه. بتنزل على القناة حلقات جديدة وقصص كاملة، وكل حلقة بتنتهي بتشويق.","Historias en árabe coloquial egipcio con el oso Toto y sus amigos. Se añaden al canal nuevos episodios e historias completas, y cada episodio termina en suspenso.","Des histoires en arabe égyptien dialectal avec l'ours Toto et ses amis. De nouveaux épisodes et des histoires complètes sont ajoutés à la chaîne, et chaque épisode se termine par un suspense."],
"Watch":["شاهد","Ver","Regarder"],
"Watch the episodes:":["شوف الحلقات:","Mira los episodios:","Regardez les épisodes :"],
"Open the channel":["افتح القناة","Abrir el canal","Ouvrir la chaîne"],
"Products worth recommending.":["منتجات تستحق التوصية.","Productos que merece la pena recomendar.","Des produits qui méritent d'être recommandés."],
"How it works":["كيف يعمل","Cómo funciona","Comment ça marche"],
"I pick simple home and kitchen tools, read the complaints before the praise, and only share ones that hold up.":["أختار أدوات بسيطة للبيت والمطبخ، وأقرأ الشكاوى قبل المديح، ولا أشارك إلا ما يصمد.","Elijo herramientas sencillas para casa y cocina, leo las quejas antes que los elogios y solo comparto las que cumplen.","Je choisis des outils simples pour la maison et la cuisine, je lis les plaintes avant les éloges et je ne partage que ce qui tient la route."],
"Disclosure":["إفصاح","Aviso","Transparence"],
"Some links on my pages and social accounts are affiliate links (AliExpress Portals). If you buy through one I may earn a small commission at no extra cost to you.":["بعض الروابط في صفحاتي وحساباتي روابط أفلييت (AliExpress Portals). إذا اشتريت عبر أحدها قد أحصل على عمولة صغيرة دون أي تكلفة إضافية عليك.","Algunos enlaces en mis páginas y redes son de afiliado (AliExpress Portals). Si compras a través de uno, puedo ganar una pequeña comisión sin coste extra para ti.","Certains liens de mes pages et réseaux sont des liens d'affiliation (AliExpress Portals). Si vous achetez via l'un d'eux, je peux toucher une petite commission sans frais supplémentaires pour vous."],
"Picks":["اختياراتي","Selección","Sélection"],
"Thick microfiber cloths, 20x30 cm, for glass, kitchen and surfaces. Washable and reusable.":["فوط مايكروفايبر سميكة، 20×30 سم، للزجاج والمطبخ والأسطح. قابلة للغسل وإعادة الاستخدام.","Paños gruesos de microfibra, 20x30 cm, para cristal, cocina y superficies. Lavables y reutilizables.","Chiffons épais en microfibre, 20x30 cm, pour vitres, cuisine et surfaces. Lavables et réutilisables."],
"A kitchen oil sprayer that gives a light, even mist. Good for air fryers, grilling and salads. Comes in different sizes.":["بخاخ زيت للمطبخ يعطي رذاذاً خفيفاً ومتساوياً. مناسب للقلاية الهوائية والشوي والسلطات. يتوفر بأحجام مختلفة.","Un pulverizador de aceite para cocina que da una niebla ligera y uniforme. Ideal para freidoras de aire, parrilla y ensaladas. Disponible en varios tamaños.","Un vaporisateur d'huile de cuisine qui donne une brume légère et régulière. Idéal pour friteuses à air, grillades et salades. Existe en plusieurs tailles."],
"Stops phones, keys and small items from falling between the seat and the center console.":["يمنع سقوط الجوال والمفاتيح والأغراض الصغيرة بين المقعد والكونسول الوسطي.","Evita que móviles, llaves y objetos pequeños caigan entre el asiento y la consola central.","Empêche téléphones, clés et petits objets de tomber entre le siège et la console centrale."],
"A foldable trunk organizer with several pockets. Keeps tools and items tidy and in place while you drive.":["منظم صندوق قابل للطي بجيوب متعددة. يحافظ على الأدوات والأغراض مرتبة وثابتة أثناء القيادة.","Un organizador plegable para el maletero con varios bolsillos. Mantiene las herramientas y objetos ordenados y en su sitio mientras conduces.","Un organisateur de coffre pliable à plusieurs poches. Garde outils et objets rangés et en place pendant la conduite."],
"A stainless steel mesh that sits over the pan while frying. Cuts oil splatter and keeps the stove clean.":["شبكة ستانلس ستيل توضع فوق المقلاة أثناء القلي. تقلل تناثر الزيت وتحافظ على نظافة البوتاجاز.","Una malla de acero inoxidable que se coloca sobre la sartén al freír. Reduce las salpicaduras de aceite y mantiene limpia la cocina.","Une grille en acier inoxydable posée sur la poêle pendant la friture. Réduit les éclaboussures d'huile et garde la cuisinière propre."],
"Check current price on AliExpress":["شاهد السعر الحالي على AliExpress","Ver el precio actual en AliExpress","Voir le prix actuel sur AliExpress"],
"Made by Adham.":["صنع أدهم.","Hecho por Adham.","Fait par Adham."],
"The brand behind my short videos and posts: ideas, stories and things I make.":["العلامة وراء فيديوهاتي القصيرة ومنشوراتي: أفكار وحكايات وأشياء أصنعها.","La marca detrás de mis vídeos cortos y publicaciones: ideas, historias y cosas que hago.","La marque derrière mes courtes vidéos et publications : idées, histoires et choses que je fabrique."],
"Where this is going.":["إلى أين يتجه هذا.","Hacia dónde va esto.","Où tout cela va."],
"Now":["الآن","Ahora","Maintenant"],
"Next":["التالي","Siguiente","Ensuite"],
"Later":["لاحقاً","Más adelante","Plus tard"],
"Books on Kindle":["كتب على كيندل","Libros en Kindle","Livres sur Kindle"],
"Three books published or in review. Next: more niches, and a print edition of the best seller.":["ثلاثة كتب منشورة أو قيد المراجعة. التالي: مجالات أخرى، ونسخة مطبوعة من الأكثر مبيعاً.","Tres libros publicados o en revisión. Lo siguiente: más nichos y una edición impresa del más vendido.","Trois livres publiés ou en revue. Ensuite : d'autres niches et une édition papier du meilleur vendeur."],
"Story channel":["قناة الحكايات","Canal de historias","Chaîne d'histoires"],
"Toto & Friends is live on YouTube, with new episodes added over time.":["توتو وصحابه منزل على يوتيوب، وبتنزل حلقات جديدة مع الوقت.","Toto & Friends ya está en YouTube, con nuevos episodios con el tiempo.","Toto & Friends est en ligne sur YouTube, avec de nouveaux épisodes au fil du temps."],
"Affiliate list every week":["قائمة أفلييت كل أسبوع","Lista de afiliados cada semana","Une liste d'affiliation chaque semaine"],
"Trending products with honest notes, tested before they are shared.":["منتجات رائجة مع ملاحظات صادقة، وتُجرَّب قبل مشاركتها.","Productos en tendencia con notas sinceras, probados antes de compartirlos.","Des produits tendance avec des avis honnêtes, testés avant d'être partagés."],
"Three books are in review on Amazon. Next: more niches, and print editions.":["الكتب الثلاثة قيد المراجعة على أمازون. التالي: مجالات أخرى، ونسخ مطبوعة.","Los tres libros están en revisión en Amazon. Lo siguiente: más nichos y ediciones impresas.","Les trois livres sont en cours de revue sur Amazon. Ensuite : d'autres niches et des éditions imprimées."],
"Four ready-made sheets are available now: inventory, rent, subscriptions and freelance income. 50 EGP each.":["أربع شيتات جاهزة متاحة دلوقتي: مخزون، إيجارات، اشتراكات ودخل فريلانس. بـ50 جنيه للشيت.","Ya hay cuatro hojas listas: inventario, alquileres, suscripciones e ingresos freelance. 50 EGP cada una.","Quatre feuilles prêtes à l'emploi sont disponibles : inventaire, loyers, abonnements et revenus freelance. 50 EGP chacune."],
"Excel templates":["قوالب إكسل","Plantillas de Excel","Modèles Excel"],
"Ready-made workbooks for shops, homes and freelancers.":["ملفات جاهزة للمحلات والبيوت والفريلانسرز.","Libros listos para tiendas, hogares y freelancers.","Des classeurs prêts à l'emploi pour les commerces, les foyers et les freelances."],
"Reach more readers":["الوصول إلى قرّاء أكثر","Llegar a más lectores","Toucher plus de lecteurs"],
"Grow the social accounts and bring more visitors to the books and tools.":["تنمية حسابات التواصل وجلب زوار أكثر للكتب والأدوات.","Hacer crecer las redes sociales y llevar más visitantes a los libros y herramientas.","Développer les réseaux sociaux et amener plus de visiteurs vers les livres et les outils."],
"Say hello.":["قل مرحباً.","Saluda.","Dites bonjour."],
"Questions about the books, Excel tools or working together? Write to me.":["أسئلة عن الكتب أو أدوات إكسل أو العمل معاً؟ راسلني.","¿Preguntas sobre los libros, las herramientas de Excel o trabajar juntos? Escríbeme.","Des questions sur les livres, les outils Excel ou une collaboration ? Écrivez-moi."],
"Email":["البريد الإلكتروني","Correo","E-mail"],
"Let's build":["خلّينا نبني","Construyamos","Construisons"],
"something useful.":["شيئاً مفيداً.","algo útil.","quelque chose d'utile."],
"Adham Yasser · Alexandria, Egypt":["أدهم ياسر · الإسكندرية، مصر","Adham Yasser · Alejandría, Egipto","Adham Yasser · Alexandrie, Égypte"]
};
var ROT={en:['books','Excel tools','story videos','side projects'],ar:['كتباً','أدوات إكسل','فيديوهات حكايات','مشاريع جانبية'],es:['libros','herramientas de Excel','vídeos de historias','proyectos paralelos'],fr:['des livres','des outils Excel','des vidéos d\'histoires','des projets annexes']};
var TITLE={en:"Adham Yasser (أدهم ياسر) | Books and Excel sheets, Alexandria, Egypt",ar:"أدهم ياسر (Adham Yasser) | شيتات إكسل وكتب ومشاريع من الإسكندرية، مصر",es:"Adham Yasser (أدهم ياسر) | Hojas de Excel y libros, Alejandría, Egipto",fr:"Adham Yasser (أدهم ياسر) | Feuilles Excel et livres, Alexandrie, Égypte"};
var DESC={en:"Adham Yasser (أدهم ياسر) from Alexandria, Egypt. Excel sheets for small shops, rent and freelance tracking, Egypt travel guides on Kindle (in review) and Arabic story videos.",ar:"أدهم ياسر (Adham Yasser) من الإسكندرية، مصر. شيتات إكسل للمحلات الصغيرة ومتابعة الإيجارات والفريلانس، وأدلة سفر لمصر على كيندل (قيد المراجعة)، وحواديت بالعامية المصرية.",es:"Adham Yasser (أدهم ياسر), de Alejandría, Egipto. Hojas de Excel para tiendas pequeñas, alquileres y freelancers, guías de viaje de Egipto en Kindle (en revisión) y vídeos de historias en árabe.",fr:"Adham Yasser (أدهم ياسر), d'Alexandrie, en Égypte. Feuilles Excel pour petits commerces, loyers et freelances, guides de voyage sur l'Égypte sur Kindle (en revue) et vidéos d'histoires en arabe."};
var PG=document.documentElement.getAttribute('data-page');
var TT={en:"Excel sheets: inventory, rent, subscriptions and freelance demos | Adham Yasser",ar:"شيتات إكسل تجريبية: مخزون وإيجارات واشتراكات وفريلانس | أدهم ياسر",es:"Hojas de Excel: demos de inventario, alquileres, suscripciones e ingresos freelance | Adham Yasser",fr:"Feuilles Excel : démos inventaire, loyers, abonnements et revenus freelance | Adham Yasser"};
var DT={en:"Four live Excel sheet demos you can edit in your browser: inventory with reorder alerts, rent tracker, subscriptions and freelance income. 50 EGP each. Sample data, nothing is saved.",ar:"أربع شيتات إكسل تجريبية تعدّل فيها من المتصفح: مخزون بتنبيهات إعادة الطلب، متابعة إيجارات، اشتراكات ودخل فريلانس. بـ50 جنيه للشيت. بيانات تجريبية ولا يتم حفظ شيء.",es:"Cuatro demos de hojas de Excel que puedes editar en el navegador: inventario con alertas, alquileres, suscripciones e ingresos freelance. 50 EGP cada una. Datos de ejemplo, no se guarda nada.",fr:"Quatre démos de feuilles Excel modifiables dans le navigateur : inventaire avec alertes, loyers, abonnements et revenus freelance. 50 EGP chacune. Données d'exemple, rien n'est enregistré."};
var lang='en',nodes=[];
function skip(n){var p=n.parentElement;return !p||/^(SCRIPT|STYLE|NOSCRIPT|OPTION)$/.test(p.tagName)||p.closest('.try-sheet,.try-sum,.try-tabs,.try-hint,.lang,.loader,.ar,h3 a,[data-split],.keep')}
function collect(){var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),n;while(n=w.nextNode()){var t=n.nodeValue.trim();if(!t||skip(n))continue;nodes.push({n:n,en:t,pre:n.nodeValue.match(/^\s*/)[0],post:n.nodeValue.match(/\s*$/)[0]})}}
function T(s){if(lang==='en')return s;var e=D[s];return e?e[L.indexOf(lang)-1]:s}
window.__t=T;
function split(el,txt){var t=txt.split(/\s+/);el.textContent='';t.forEach(function(w,i){var o=document.createElement('span');o.className='w';o.setAttribute('aria-hidden','true');var s=document.createElement('span');s.textContent=w;s.style.transitionDelay=(i*0.09)+'s';o.appendChild(s);el.appendChild(o)});el.setAttribute('aria-label',txt)}
var miss=[];
function apply(l){lang=l;var i=L.indexOf(l)-1;
 nodes.forEach(function(o){var s=l==='en'?o.en:(D[o.en]?D[o.en][i]:(miss.push(o.en),o.en));o.n.nodeValue=o.pre+s+o.post});
 document.querySelectorAll('[data-split]').forEach(function(el){if(!el.dataset.en)el.dataset.en=el.getAttribute('aria-label')||el.textContent.trim();var s=l==='en'?el.dataset.en:(D[el.dataset.en]?D[el.dataset.en][i]:(miss.push(el.dataset.en),el.dataset.en));split(el,s)});
 var h=document.documentElement;h.lang=l;h.dir=l==='ar'?'rtl':'ltr';
 document.title=(PG==='try'?TT:TITLE)[l];var m=document.querySelector('meta[name=description]');if(m)m.content=(PG==='try'?DT:DESC)[l];
 window.__rotWords=ROT[l];var r=document.querySelector('#rotator>span');if(r)r.textContent=ROT[l][0];
 var b=document.getElementById('langBtn');if(b)b.querySelector('b').textContent=l.toUpperCase();
 document.querySelectorAll('#langMenu button').forEach(function(x){x.classList.toggle('on',x.dataset.l===l)});
 try{localStorage.setItem('lang',l)}catch(e){}
 dispatchEvent(new Event('langchange'));if(miss.length&&window.console)console.log('i18n missing',miss.filter(function(v,k,a){return a.indexOf(v)===k}))}
function ui(){var nav=document.getElementById('nav'),burger=document.getElementById('burger');var d=document.createElement('div');d.className='lang';d.innerHTML='<button type="button" id="langBtn" aria-haspopup="true" aria-expanded="false" aria-label="Language"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg><b>EN</b></button><div id="langMenu" role="menu">'+L.map(function(k){return '<button type="button" role="menuitem" data-l="'+k+'" lang="'+k+'">'+NAMES[k]+'</button>'}).join('')+'</div>';nav.insertBefore(d,burger);
 var btn=d.querySelector('#langBtn');btn.addEventListener('click',function(e){e.stopPropagation();var o=d.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
 d.querySelectorAll('#langMenu button').forEach(function(x){x.addEventListener('click',function(){apply(x.dataset.l);d.classList.remove('open');btn.setAttribute('aria-expanded',false)})});
 document.addEventListener('click',function(){d.classList.remove('open')});document.addEventListener('keydown',function(e){if(e.key==='Escape')d.classList.remove('open')})}
collect();ui();
var q=(location.search.match(/[?&]lang=(en|ar|es|fr)/)||[])[1],s;try{s=localStorage.getItem('lang')}catch(e){}
var start=q||s||'en';if(L.indexOf(start)>0)apply(start);
})();

/* WhatsApp order buttons: prefilled message names the sheet and price, in the visitor's language. */
(function(){
var N={inv:{en:'Inventory',ar:'المخزون',es:'Inventario',fr:'Inventaire'},rent:{en:'Rent tracker',ar:'متابعة الإيجارات',es:'Control de alquileres',fr:'Suivi des loyers'},sub:{en:'Subscriptions',ar:'الاشتراكات',es:'Suscripciones',fr:'Abonnements'},fl:{en:'Freelance income',ar:'دخل الفريلانس',es:'Ingresos freelance',fr:'Revenus freelance'}};
var O={en:'Hi Adham, I want the {n} sheet (50 EGP).',ar:'أهلاً أدهم، عايز شيت {n} (50 جنيه).',es:'Hola Adham, quiero la hoja de {n} (50 EGP).',fr:'Bonjour Adham, je voudrais la feuille {n} (50 EGP).'};
var C={en:'Hi Adham, I want a custom sheet for my work.',ar:'أهلاً أدهم، عايز شيت إكسل مخصوص لشغلي.',es:'Hola Adham, quiero una hoja de Excel personalizada para mi trabajo.',fr:'Bonjour Adham, je voudrais une feuille Excel sur mesure pour mon travail.'};
var CS={en:'Hi Adham, I want a custom sheet, similar to the {n} sheet.',ar:'أهلاً أدهم، عايز شيت مخصوص لشغلي، شبه شيت {n}.',es:'Hola Adham, quiero una hoja personalizada, parecida a la de {n}.',fr:'Bonjour Adham, je voudrais une feuille sur mesure, proche de la feuille {n}.'};
var T={en:'Hi Adham, I tried the {n} demo on your site and I want the sheet (50 EGP).',ar:'أهلاً أدهم، جربت ديمو {n} في موقعك وعايز الشيت (50 جنيه).',es:'Hola Adham, probé la demo de {n} en tu sitio y quiero la hoja (50 EGP).',fr:'Bonjour Adham, j\'ai essayé la démo {n} sur ton site et je veux la feuille (50 EGP).'};
var K={en:'Hi Adham, I found your website and I would like to get in touch.',ar:'أهلاً أدهم، شفت موقعك وعايز أتواصل معاك.',es:'Hola Adham, vi tu sitio web y me gustaría ponerme en contacto contigo.',fr:'Bonjour Adham, j\'ai vu ton site et je voudrais te contacter.'};
var P='https://wa.me/201024378512?text=';
function msg(key,l){var base=key.split(':')[0],k=key.split(':')[1];if(base==='contact')return K[l];if(base==='tryorder'){k=window.__waKey||'inv';return T[l].replace('{n}',N[k][l])}if(base==='order'){return O[l].replace('{n}',N[k][l])}
 if(base==='custom')return k&&N[k]?CS[l].replace('{n}',N[k][l]):C[l];return null}
function fix(){var l=document.documentElement.lang;if(!O[l])l='en';document.querySelectorAll('[data-wa]').forEach(function(a){var m=msg(a.dataset.wa,l);if(m)a.href=P+encodeURIComponent(m)})}
window.waFix=fix;window.waMsg=msg;addEventListener('langchange',fix);
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',fix);else fix();
})();
