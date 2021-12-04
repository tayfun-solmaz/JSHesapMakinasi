function biryazi(deger){ //burda basılan sayı fonksiyonu çalışıyor
    var icerik = document.getElementById("gosterge").value; //textin içerisindekileri alıyoruz
    if (icerik == ""){ //textin içerisi boşsa
        document.getElementById("gosterge").value = deger; //basılan sayıyı texte yaz diyoruz
    }else{ //eğer text içerisinde değer varsa
        document.getElementById("gosterge").value = icerik + deger;    //girilen değerin yanına basılan sayıyı yaz
    }
}
function toplamalar(){ //toplamalar adında fonksiyonumuz var + butonuna basınca çalışıyor
    var icerik = document.getElementById("gosterge").value; //icerik değişkenine text içerisindeki veriyi yaz
    if (icerik == ""){ //iceriğin içi boşsa toplama yapmaması için 
        alert ("lütfen bir sayı girin"); // değer girin uyarısı giriyoruz
    }else{ // eğer veri varsa da
        document.getElementById("gosterge").value = icerik + "+"; //textin içerisindeki verinin yanına + işareti koy diyoruz   
    }

  }
  function cikarmalar(){ // toplamalar için yapılanların aynısı burdada geçerli
    var icerik = document.getElementById("gosterge").value;
    if (icerik == ""){
        alert ("lütfen bir sayı girin");
    }else{
        document.getElementById("gosterge").value = icerik + "-";   
    }
  }
  function carpmalar(){ // toplamalar için yapılanların aynısı burdada geçerli
    var icerik = document.getElementById("gosterge").value;
    if (icerik == ""){
        alert ("lütfen bir sayı girin");
    }else{
        document.getElementById("gosterge").value = icerik + "*";   
    }
  }
  function bolmeler(){ // toplamalar için yapılanların aynısı burdada geçerli
    var icerik = document.getElementById("gosterge").value;
    if (icerik == ""){
        alert ("lütfen bir sayı girin");
    }else{
        document.getElementById("gosterge").value = icerik + "/";   
    }
    
    
  }
  function sil(){ //adında da anlaşılacağı gibi c butonuna basılınca silme işlemi yapıyoruz
      document.getElementById("gosterge").value = ""; // textin içini boşaltıyoruz
  }
  function esittir(){ //eşittir butonuna baılınca bu bölüm çalışıyor
      var bilgi = document.getElementById("gosterge").value; //bilgi değişkenine texteki veriyi aktarıyoruz
      var uzunluk = bilgi.length; // text içerisindek verinin uzunluğunu alıyoruz
      var son; //son adında değişken tanımladık
      var sonnuc = 0; // sonuç adında değeri 0 olan değişken tanımladık
      var sayi = 0; // sayi adında değeri 0 olan değişken
      
      if (bilgi == ""){ //eğer bilgi yani textin içerisi boşsa
        alert ("Lütfen Bir Sayı Ve Bir İşlem Yapın"); // herhangi bir toplama çarpma gibi bir işlem yapamacak bunun için uyarıyoruz
      }
      if (uzunluk <"3"){ //en düşük ihtimalle 2 değeri işleme sokabileceği için oparatörle birlikte 3 olacağından bilgimiz 3 ten küçükmü kontrol ediyoruz
          alert("Lütfen İşlem Yapın"); //uzunluk bilgisi 3ten küçükse uyarıyoruz
      }if (uzunluk >="3"){ //uzunluk 3ten büyükse işlemlere başlatıyoruz
         
        for (let i=0; i <= uzunluk; i++){ // i değişkeni önce 0 olacak uzunluğa eşit yada büyük olana kadar 1 bir artacak
             son = bilgi[i]; //son adındaki değişkenimize bilgi dizisinin 0dan başlatıp text içerisindeki uzunluk kadar verileri tane tane aldırıyoruz
             
             
             
             if (son =="+"){ //burda örneğin "12+25" girilmiş olsun 12 normal sayı ama + işaretine geldiysek
                for (let u=0; u<i; u++){ //bir döngüye sokuyoruz amaç 12+25 işleminde + işaretinin soltarafındaki sayıları almak
                sonuc =  bilgi[u] ; //sonuç değişkenine aynı örnek üzerinden gidersek 12 değerini aldırmış oluyoruz
                
                sonnuc = sonnuc + bilgi[u]; //burda da sonuç değişkenin içerisne 12 sayını yazdırdık
                }
                for (let o=i+1;o<uzunluk; o++){ //burda aynı örnekten gideceğim + işaretinin sağ tarafındaki sayıları aldıracağız yani 25 sayısını
                    degerlendirme = bilgi[o]; //değerlendirme değişkenine soldaki sayıları birer birer atıyoruz
                    
                    if ( degerlendirme == "+"){  // değerlendirme adında dğişkenimiz tekrar + işareti bulursa yani işlem şöyleyse 12+25+12 bu işlemi yapmayacak
                        
                        alert ("iki işlem yapamazsınız"); //uyarıyoruz
                        sonnuc= 0; //sonuç değişkeninin içini 0a eşitliyoruz
                        sayi=0; //sayi değişkeninide 0 lıyoruz
                        document.getElementById("gosterge").value= ""; //textin içini boşaltıyoruz
                        return;//yazılan veri istediğimiz gibi değil bu yüzden en başa dönmüş olacağız
                        
                        
                        
                    }else{// ama eğer işlem bizim istediğimiz kriterde ise
                    sayi=sayi+bilgi[o]; //sayi değişkenine örneğimizdeki 12+25 işleminin 25 kısmını atıyoruz
                    }
                }
                toplam = parseInt(sonnuc) + parseInt(sayi); // artık herşey normal olduğu için toplayabiliriz parseint ile değerlerimizi integera çeviriyoruz ve topluyoruz
                
                document.getElementById("gosterge").value= toplam; //textin içerisine toplamın sonucunu atıyoruz
             }
             //Çıkarma İşlemi Başlangıç
             if (son =="-"){ //toplama işlemindeki bütün adımlarla aynı bu yüzden tekrar yazmıyorum
                for (let u=0; u<i; u++){
                sonuc =  bilgi[u] ;
                
                sonnuc = sonnuc + bilgi[u];
                }
                for (let o=i+1;o<uzunluk; o++){
                    degerlendirme = bilgi[o];
                    
                    if ( degerlendirme == "-"){
                        
                        alert ("iki işlem yapamazsınız");
                        sonnuc= 0;
                        sayi=0;
                        document.getElementById("gosterge").value= "";
                        console.log(o);
                        return;
                        
                        
                        
                    }else{
                    sayi=sayi+bilgi[o];
                    }
                }
                toplam = parseInt(sonnuc) - parseInt(sayi);
                document.getElementById("gosterge").value="";
                document.getElementById("gosterge").value= toplam;
             }
             //çarpma işlemi
             if (son =="*"){ //toplama işlemindeki bütün adımlarla aynı bu yüzden tekrar yazmıyorum
                for (let u=0; u<i; u++){
                sonuc =  bilgi[u] ;
                
                sonnuc = sonnuc + bilgi[u];
                }
                for (let o=i+1;o<uzunluk; o++){
                    degerlendirme = bilgi[o];
                    
                    if ( degerlendirme == "*"){
                        
                        alert ("iki işlem yapamazsınız");
                        sonnuc= 0;
                        sayi=0;
                        document.getElementById("gosterge").value= "";
                        console.log(o);
                        return;
                        
                        
                        
                    }else{
                    sayi=sayi+bilgi[o];
                    }
                }
                toplam = parseInt(sonnuc) * parseInt(sayi);
                document.getElementById("gosterge").value="";
                document.getElementById("gosterge").value= toplam;
             }
             //bölme işlem
             if (son =="/"){ //toplama işlemindeki bütün adımlarla aynı bu yüzden tekrar yazmıyorum
                for (let u=0; u<i; u++){
                sonuc =  bilgi[u] ;
                
                sonnuc = sonnuc + bilgi[u];
                }
                for (let o=i+1;o<uzunluk; o++){
                    degerlendirme = bilgi[o];
                    
                    if ( degerlendirme == "/"){
                        
                        alert ("iki işlem yapamazsınız");
                        sonnuc= 0;
                        sayi=0;
                        document.getElementById("gosterge").value= "";
                        console.log(o);
                        return;
                        
                        
                        
                    }else{
                    sayi=sayi+bilgi[o];
                    }
                }
                toplam = parseInt(sonnuc) / parseInt(sayi);
                document.getElementById("gosterge").value="";
                document.getElementById("gosterge").value= toplam;
             }
             }

          var ikiislem = bilgi[uzunluk-1];
          
          if (ikiislem == "+" || ikiislem == "-" || ikiislem == "*" || ikiislem == "/" ){ //burada örneğin 12+/25 girilmiş olsun biz b işlemi kontrol ediyoruz 
              alert ("Bu şekilde sonuç yanlış olur"); //böyle bişey varsa uyarıyoruz
              document.getElementById("gosterge").value= ""; //girdiği değerleri siliyoruz
          } 
          
      }
      

    }
    function gerisar(){ //geri sar sağdan sola doğru teker teker silmeye yarıyor 
        var bilgi = document.getElementById("gosterge").value; //bilgi değişkenine text verilerini aktarıyoruz
        var uzunluk = bilgi.length; //tect içerisindeki uzunluğu alıyoruz
        uzunluk = uzunluk - 1; // örneğimi 12+25 işleminde uzunluk 0dan 4e kadar toplam 5 tane biz ilk 4 tanesi alacağımızı söylüyoruz
        if (uzunluk <=0){//eğer uzunluk 0dan küçükse
            document.getElementById("gosterge").value = ""; //yani silme işlemine defalarca bastı ve bitti ise işlem yapma demiş oluyoruz
        }else{//hala değer varsa
        document.getElementById("gosterge").value =""; //text içesini boşalt
        for (let h=0; h<uzunluk;h++){ //ve girilen değer uzunluğnun bir eksi kadar döngüye sokuyoruz
            document.getElementById("gosterge").value = document.getElementById("gosterge").value  + bilgi[h]; //ve son sayı haricindekileri texte tekrar yazıyoruz
            
        }
    }
        
        
    }
    //Tayfun SOLMAZ Umarım size birşeyler katar.