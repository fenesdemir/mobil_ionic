# MOBİL PROGRAMLAMA SAĞLIK PROJESİ

Furkan Enes DEMİR 170201117

Projenin Hazırlanışı

İlk olarak “ionic start ionic-kickstart sidemenu” komutuyla “ionic-kickstart” isimli “sidemenu şablonunu kullanan bir projemizi oluştururuz. Bu işlem sırasında Framework olarak angular’ı seçip kapasitör desteğini de ekleriz.
Ardından “ng generate page meds” komutuyla ilaçalr için bir sayfa oluştururuz. Ardından ilaçları göstereceğimiz sidemenu’yü “appcomponent.ts” içinde şekildeki satırlardaki gibi oluştururuz.

![Ekran Alıntısı](https://user-images.githubusercontent.com/44068834/105459335-24156400-5c9b-11eb-965d-385eb569fd71.JPG)

Ve bu sayfaya basılacak ilaçları oluşturma için “med” ismindeki interface’imizi “ionic g interface med” komutuyla oluştururuz. Oluşan “med.ts” dosyamızda ilacı oluşturacak özellikleri tanımlarız. Number tipinde bir “id”, string tipinde “name”, string tipinde “hungryFull”, number tipinde “howManyTimesDay”, number dipinde “dosage”, string tipinde “pillSyrupInj” ve number tipinde “frequency” özellikleri tanımlanır. “Name” ilacın ismini, “hungryFull” aç karnına mı yoksa tok karnına mı kullanıldığını, “howManyTimesDay” günde kaç kere kullanıldığını, “dosage” dozunu, “pillSyrupInj” ilacın tipini (hap/şurup/enejksiyon), “frequency” ise kaç günde bir tüketileceğini belirtir.

![Ekran Alıntısı_1](https://user-images.githubusercontent.com/44068834/105459336-24156400-5c9b-11eb-8d58-64224b21bc27.JPG)
 
Ardından ilaçlar için “ionic g interface mock-meds” komutuyla bir yalancı-ilaçlar interface’i oluştururuz. Ardından oluşan “mock-meds” dosyası içinde “./med”den “Med”i import ederek “MEDS” isimli ilaç arrayimizi oluştururuz.

![Ekran Alıntısı_2](https://user-images.githubusercontent.com/44068834/105459328-224ba080-5c9b-11eb-8c88-6bb06416348f.JPG)

Sonra “meds.page.html” dosyasında “<ion-content>” içinde, bir *ngFor döngüsüyle oluşan ilaç nesnelerini “<ion-card>” içinde döndürürüz. Ve “(click) = “onSelect(med)”” metoduyla üstüne tıkaladığımız ilacın seçilmesini sağlıyoruz. 

![Ekran Alıntısı_3](https://user-images.githubusercontent.com/44068834/105459332-22e43700-5c9b-11eb-84a2-41bf8b7dd999.JPG)
 
Ardından “meds.page.ts”de selectedMed: Med, olarak bu seçimi tanımlarız. Ve void döndüren bir “onSelect” metodunu tanımlarız.

![Ekran Alıntısı_4](https://user-images.githubusercontent.com/44068834/105459333-237ccd80-5c9b-11eb-80f1-e72deaa92dc8.JPG)
    
Sonra “ionic g component meds/meds-detail” metoduyla yeni bir component oluşturulur. “meds-detail.copmonent.ts” dosyası aşağıdaki gibi ayarlanır.
 
![Ekran Alıntısı_5](https://user-images.githubusercontent.com/44068834/105459359-2d063580-5c9b-11eb-88d5-be6a26796c8e.JPG) 
 
Bu componentin “meds-detail.component.html” dosyasında ise bir *ngIf döngüsü içinde seçilen ilacın detaylarını değiştirilebilir bir şekilde veririz. Aşağıda görülebileceği üzere seçilen “Seçilen-ilacın-adı/Büyük harfle + Details” başlığı atarak ilaç hakkındaki verileri input alınabilecek şekilde sıralar. Burada bir çift yönlü veri iletişimi için “ngModel” direktifini input içinde kullanarak “med” objesine eriştik.
 
![Ekran Alıntısı_6](https://user-images.githubusercontent.com/44068834/105459360-2d9ecc00-5c9b-11eb-9d44-260c06d7ed91.JPG) 
 
Aşağıdaki şekilde ise bu kodun arayüze verdiği çıktıyı görebilirsiniz.
 
![Ekran Alıntısı_7](https://user-images.githubusercontent.com/44068834/105459354-2b3c7200-5c9b-11eb-8bdd-2de7ec073822.JPG)
 
Bu işlemin gerçekleşmesi için “meds.page.html” deki seçim yaptığımız alanın üstüne <app-meds-detail [med] = “selectedMed”></app-meds-detail> satırını ekler ve “meds.module.ts” detail’i import edip declerations’a ekleriz.

![Ekran Alıntısı_8](https://user-images.githubusercontent.com/44068834/105459355-2b3c7200-5c9b-11eb-81e9-09b3752e463f.JPG)
 
Ardından “ionic g service med” komutuyla bir servis oluşturulur. “med.service.ts” dosyasında “./med” ve “./mock-meds”den gerekli importlar yapılır. “GetMeds” isimli observable bir med obje arrayi geri döndüren bir metod oluştururuz. “Rxjs” kütüphanesinden observable kullanarak veriyi izlenebilir kılarız.

![Ekran Alıntısı_9](https://user-images.githubusercontent.com/44068834/105459356-2bd50880-5c9b-11eb-958e-62633bd80a1a.JPG)
 
Bu oluşturulan yapı “meds.page.ts”e import edilir. “MedService” sınıfına erişeceğimiz instancemiz Constructor üzerinden inject edilir. Ardından “getMeds” isimli geriye bir şey döndürmeyen ama arrayimizi “this.medService.getMeds().subscribe( meds => this.meds = meds)”ile servis metodunu çağırıp bu metoda subscribe olarak besleyen bir metod oluştururuz. Lifecycle’ımzıda arrayin beslenmesi için başlangıçta “getMeds”in çağırılıp çalıştırılması lazımdır. Bu yüzden “ngOnInit()”in içinde “this.getMeds()” ile çağırılır.

![Ekran Alıntısı_10](https://user-images.githubusercontent.com/44068834/105459357-2c6d9f00-5c9b-11eb-9fd4-01b823abd0da.JPG)

Sonuç ve Kazanımlar

Sonuç olarak hocamızın isterlerine göre bir proje hazırlayabildim. Sadece sayfalar arası gezinti yapmayı ekleyemedim. Kazanımlarıma değinecek olursam, bu ders zaten ilgimi çeken bir dersti, bu projeyle öğrendiklerimi pekiştirmiş oldum. Deneysel Sonuçları aşağıdaki sayfadaki görsellerde bulabilirsiniz.

Projenin Yüklenmesi 

Projeyi yüklemek içinse yüklemek istediğiniz klasöre gidip “git clone https://github.com/fenesdemir/mobil_ionic” komutunu çalıştırın bu size bir mobil-ionic klasörü getirecektir. “cd” komutuyla bu klasörün içine gidin “npm-install” komutunu çalıştırın ki “node_modules”ümüz oluşşsun. Ardından da “ionic serve” ile çalıştırın.
 
![Ekran Alıntısı_11](https://user-images.githubusercontent.com/44068834/105459380-3394ad00-5c9b-11eb-992e-60f2f4d6a4f6.JPG)

İlaçlar Menüsü

![Ekran Alıntısı_12](https://user-images.githubusercontent.com/44068834/105459374-31cae980-5c9b-11eb-9505-df5d8811fb33.JPG)
 
Sandoz ilacı değişmeden önce

![Ekran Alıntısı_13](https://user-images.githubusercontent.com/44068834/105459377-32638000-5c9b-11eb-8afc-513274c40ed1.JPG)
 
Sandoz dozajı değiştirildikten sonra

![Ekran Alıntısı_14](https://user-images.githubusercontent.com/44068834/105459378-32fc1680-5c9b-11eb-88da-bad735b84da9.JPG)

Ferrum ilacının menüde görüntüsü


