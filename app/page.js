'use client'
import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState } from 'react';
// import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { GiBeveledStar } from 'react-icons/gi';
import { WiStars } from 'react-icons/wi';




export default function Home() {

 


  useEffect( () => {


    // تخزين الدالة المستخدمة عند إضافة الحدث
    const handleScroll = () => {
      if ( window.pageYOffset > 200 ) {
        sec7.style.display = "block !important";
      } else {
        sec7.style.display = "none !important";
      }
    };
    const sec7 = document.querySelector( '.sec-7' );
    // إضافة الحدث واستخدام الدالة المخزنة
    window.addEventListener( "scroll", handleScroll );
   

  
    // تنظيف الحدث عند تفريغ المكون
    return () => {
      // إزالة الحدث باستخدام نفس الدالة المستخدمة
      window.removeEventListener( "scroll", handleScroll );
    };
  }, [] );


  

  
  const [index, setIndex] = useState( 0 );

  const images = [
    
    'img2.avif',
    'img1.avif',
    'img3.avif',
    'img4.avif',
    'img5.avif',
    'img6.avif',
    'img7.avif',
    'img8.jpg',
    'img9.jpg',
    'img10.jpg',
    'img11.jpg',
    'img12.jpg',
    'img13.jpg',
    'img14.jpg',
    'img15.jpg',
    'img16.jpg',
    'img17.jpg',
  ];
  return (
    <>
      <div class="whatsapp-button">
        <a href="https://wa.me/+905515882186" target="_blank">
          <img src="whatsapp1.png" alt="WhatsApp" />
        </a>
      </div>

      <div className='main-container '>

        <div className='product-name-1 container' id='top-1'>
          <h1>kadın Barbie Oversize Eşofman Takımı</h1>
</div>

        <div className='sec-1 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
          <div className='div1-sec-1'>
          <div className='image-container'>
            <img src={ images[index] } alt="" />
          </div>
          <div className="small-images-container">
            { images.map( ( image, i ) => (
              <img
                src={ image }
                alt=""
                className={ i === index ? 'small-image selected-image' : 'small-image' }
                key={ i }
                onMouseEnter={ () => setIndex( i ) }
              />
            ) ) }
          </div>
          </div>
            
          <div className='div2-sec-1'>
            <h3>kadın Barbie Oversize Eşofman Takımı</h3>
            <div className='prices'>
              <div> <h4>TRY249.00</h4></div>
              <div> <h5> TRY599.00</h5></div>
              <div className='EXTRA-prices'> <h4>EXTRA 40% OFF</h4></div>

            </div>

            <div className='div3-sec1'>
              <h2 className='flex items-start' ><GiBeveledStar style={ { width: '83px', height: 'fit-content', color: 'black' } } className='pt-1' /> Sınırlı bir süre için, Kadın Barbie Spor Takımı koleksiyonunu yalnızca TRY249.00 dan başlayan fiyatlarla elde edebilirsiniz! Bu inanılmaz fiyatlarla harika bir görünüme sahip olma fırsatını kaçırmayın.</h2>
              <h4 className='flex items-start'><GiBeveledStar style={ { width: '38px', height: 'fit-content', color: 'black' } } className='pt-1' />  Sezonun modasına katılın ve Kadın Barbie Spor Takımı koleksiyonu ile farkınızı ortaya koyun!</h4>
              <h4 className='flex items-start'><GiBeveledStar style={ { width: '28px', height: 'fit-content', color: 'black' } } className='pt-1' />  Bu özel teklifi şimdi talep edin ve istisnai fırsattan yararlanın!</h4>
            </div>
            
            <div className='go-buy-button'>
              <a href="#form">Sepete Ekle</a>
</div>
            
          

            
          </div>
        </div>

        <div className='sec-2 container'>

          <div className="main-title">
            <h2>Ürün açıklaması</h2>
          </div>

        

          <div className='div1-sec2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
            <div>
              <ul>
                <li><div><WiStars /></div> Bu ürün, Kadın Barbie Baskılı Sweatshirt Eşofman Alt-Üst Takımı adıyla tanımlanan, eğlenceli ve şık bir gardırop eklentisidir.</li>
                <li><div><WiStars /></div> Üst kısmı, Barbie logosuna sahip geniş bir baskıya sahip olan rahat bir sweatshirtten oluşmaktadır. Alt kısmında ise yumuşak ve esnek bir malzemeden yapılmış rahat bir eşofman bulunmaktadır.</li>
                <li><div><WiStars /></div> Hem sweatshirt, hem de eşofman, cildi tahriş etmeyen, nefes alabilen ve mükemmel bir şekilde oturan yüksek kaliteli bir kumaştan yapılmıştır.</li>
                <li><div><WiStars /></div> Bu set, hem iç mekanlarda rahatlıkla giyilebilir, hem de dışarı çıkarken mükemmel bir seçenek olabilir.</li>
                <li><div><WiStars /></div> Barbie baskısı, bu takımı benzersiz ve şık bir seçim haline getirir. Üstelik, geniş bir beden yelpazesinde mevcuttur, böylece herkes kendi mükemmel uyumunu bulabilir.</li>
                <li><div><WiStars /></div> Makinede yıkanabilir ve kolay bakım gerektirir.</li>
              </ul>
            </div>
            <div className='div2-sec2-image-container'><img src="img15.jpg" alt="" /></div>
          </div>



          <div className='div2-description grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-5 gap-3'>
            <div>
              <h2>ÖZELLİKLER</h2>
              <ul>

                <li>Türkiyede üretildi.</li>

                <li>Türkiye de üretildi.</li>

                <li>Siyah, Gri.</li>
                <li>%100 Pamuk.</li>
              </ul>
            </div>

            <div>
              <h2>KOLAY İADE</h2>
              <ul>
                <li>Değişim veya para iadesi için 15 gün içinde iade etmeniz yeterlidir.</li>
              </ul>
            </div>
            <div>
              <h2>kapıda ödeme</h2>
              <ul>
                <li>Tahmini işlem süresi: 1-3 iş günü</li>
              </ul>
            </div>

</div>
          
        </div>

        <div className='sec-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 '>
          <div> 
            <h2>Niçin hayperglam büyük beden hoodie?</h2>
          <p>Ceviz ahşap kart tepsisi, bir yığın Focus kartını mükemmel bir şekilde uyacak şekilde hassas bir şekilde işlenmiştir.</p>
           
            <div className='div2-sec-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5' >
              <div>
                <div>
                  <h3>Rahat Tasarım</h3>
                  <p>Bu ürün, gün boyu konfor ve rahatlık sağlamak için özenle tasarlanmıştır.</p>
                </div>
                <div>
                  <h3>Çekici Barbie Baskısı</h3>
                  <p>Canlı ve çarpıcı Barbie baskısı, bu takımı her yaş grubundan Barbie hayranları için mükemmel bir seçenek yapıyor.</p>
                </div>
                <div>
                  <h3>Mükemmel Uyum</h3>
                  <p>Farklı beden seçenekleri ile her vücut tipine uyum sağlar ve mükemmel bir uyum sunar.</p>
                </div>
              </div>

              <div>
                <div>
                  <h3>Kaliteli Malzeme</h3>
                  <p>Yüksek kaliteli kumaştan üretilmiştir, uzun süreli kullanımlarda bile şeklini korur.</p>
                </div>

                <div>
                  <h3>Esnekliği</h3>
                  <p>Eşofman alt üst takım, esnekliği sayesinde hareket özgürlüğü sağlar, her türlü aktivitede size eşlik eder.</p>
                </div>
              </div>
            </div>
            
          </div>
          
          <div>
            <video autoPlay muted loop>
             
              <source src="video1.mp4" type="video/mp4" />
           
            </video>
</div>
        </div>

        
        <div className='sec-4'>
          
          
          
        </div>

        <div className='sec-5'>

        </div>

        <div className='sec-6 container'>

          <div className="main-title">
            <h2>Sıkça sorulan sorular.</h2>
          </div>

          <div>
            <div className='div2-sec-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5' >
              <div>
                <div>
                  <h3>Bu ürünün beden seçenekleri nelerdir?</h3>
                  <p>Bu ürün XS, S, M, L ve XL olmak üzere beş farklı beden seçeneği sunmaktadır.</p>
                </div>
                <div>
                  <h3>Bu eşofman takımının rengi nedir?</h3>
                  <p>Kadın Barbie Baskılı Sweatshirt Eşofman Alt Üst Takım, canlı ve çekici bir pembe rengindedir.</p>
                </div>

                <div>
                  <h3>Kadın Barbie Baskılı Sweatshirt Eşofman Alt Üst Takımı nasıl temizlenmelidir?</h3>
                  <p>Bu ürün, kalitesini korumak için sadece soğuk suyla yıkanmalı ve düşük sıcaklıkta kurutulmalıdır.</p>
                </div>
                
              </div>

              <div>
                <div>
                  <h3>Bu ürünün malzemesi nedir?</h3>
                  <p>Bu ürün %100 pamuk malzemeden üretilmiştir ve cildi tahriş etmemek için en kaliteli kumaşlar kullanılmıştır.</p>
                </div>
                <div>
                  <h3>Bu ürün ne tür bir baskıya sahip?</h3>
                  <p>Bu ürün, popüler Barbie temasını yansıtan özel bir baskıya sahip.</p>
                </div>

                
              </div>
            </div>
          </div>

        </div>

        <div className='sec-7'>
          <a href="#form">Sepete Ekle</a>
        </div>
        <div className='sec-8' id='form'>
          

          <form method="POST"
            id="form"
            action="https://script.google.com/macros/s/AKfycbyAheoJ1RhnSD8N0t5jTx6uU3dRpMFPKxqY9XJWFZADtUhRpwo5WtPlMtqjv1rBeIYmRQ/exec"
          //  action="https://script.google.com/macros/s/AKfycbwBlKIKMr0NckNz-zk1mL2JhVnoVq9s7DAHsQ615gnPSMll5vY2bs8yjKSpwMF8R4ON/exec"
          
          >
          
            <div>
              <label htmlFor="color">Renk:</label>
              <select
                id="color"
                name="color"

              >
                <option value="black" style={ { backgroundColor: 'black' } }>Siyah</option>
                <option value="gray" style={ { backgroundColor: 'gray' } }>Gri</option>
              



              </select>
            </div>
            <div>
              <label htmlFor="size">Beden:</label>
              <select
                id="size"
                name="size"

              >
                <option value="xs">XS</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
                <option value="2xl">2XL</option>
                <option value="3xl">3XL</option>
              </select>
            </div>
            <div>
           
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                placeholder='Miktar'
              />
            </div>

            <div>
              {/* <label htmlFor="phone">Telefon Numarası:</label> */}
              <input type="tel" id="phone" name="phone" placeholder='Telefon Numarası' />
            </div>
            <div>
              {/* <label htmlFor="address">Adres:</label> */}
              <input type="text" id="address" name="address" placeholder='Adres' />
            </div>
            <div>
              {/* <label htmlFor="additionalInfo">Ek Bilgi:</label> */}
              <textarea id="additionalInfo" name="additionalInfo" placeholder='Ek Bilgi'></textarea>
            </div>

            <div >
              <button type="submit" id='submit'>Sepete Ekle</button>
            </div>
          </form>

          
</div>

    </div>
    </>
  )
}
