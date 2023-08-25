import { Component } from '@angular/core';
import { AppLauncher } from '@capacitor/app-launcher';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  sucursales = fake_response.sucursales;

  constructor(private platform: Platform) {}

  checkCanOpenUrl = async () => {
    console.log('🚀 ~ HomePage ~ checkCanOpenUrl= ~ checkCanOpenUrl:');
    const { value } = await AppLauncher.canOpenUrl({
      url: 'com.getcapacitor.myapp',
    });

    console.log('Can open url: ', value);
  };

  openPortfolioPage = async () => {
    console.log('🚀 ~ HomePage ~ openPortfolioPage= ~ openPortfolioPage:');
    await AppLauncher.openUrl({
      url: 'com.getcapacitor.myapp://page?id=portfolio',
    });
  };

  openSucursalPage = async (
    latitud: string,
    longitud: string,
    direccion: string
  ) => {
    // get device type
    this.platform.ready().then(async () => {
      await console.log({ platform: this.platform.is });
      if (this.platform.is('ios')) {
        //open with apple maps
        AppLauncher.openUrl({ url: `http://maps.apple.com/?q=${direccion}` });
      } else if (this.platform.is('android')) {
        //open with waze
        await AppLauncher.openUrl({
          url: `https://waze.com/ul?q=${latitud},${longitud}&navigate=yes`,
        });
      } else {
        //open with google maps
        AppLauncher.openUrl({
          url: `https://www.google.com/maps/search/?api=1&query=${latitud},${longitud}`,
        });
      }
    });
  };
}

const fake_response = {
  giftcard: {
    id: 1,
    empresa: 'Falabella',
    giftcard: 'FALABELLA',
    condicionesHTML:
      '<p></p><p style="font-size: 12pt;">1. Tarjeta al portador, válida para ser usada en tiendas físicas Falabella.<br/>2. Las gift cards canjeadas a partir del 20 de abril de 2020 pueden ser utilizadas en Falabella.com, solo por productos Falabella (NO VALIDA PARA PRODUCTOS MARKETPLACE). El sitio sólo acepta una gift card por compra y no se puede completar el monto total con otro medio de pago.<br/>3. Presente su gift card digital directamente en caja desde su Smartphone (no se aceptarán gift cards impresas).<br/>4. No utilizable en compras para listas de novios, Tottus, Sodimac Homecenter y ventas a través del Call Center.<br/>5. No disponible para compras con factura.<br/>6. Falabella no es responsable en casos de extravío o hurto de esta tarjeta.<br/>7. Los Términos y condiciones de Uso se encuentran protocolizados con fecha 8 de julio de 2016 en la notaría Santiago Francisco Leiva Carvajal.<br/>8. En tiendas Falabella puede utilizar hasta 3 gift cards por compra.<br/>9. En Falabella.com solo puede utilizar una gift card por compra.<br/><i><u></u><u></u></i></p><p></p>',
    condicionesPlana:
      '1. Tarjeta al portador, válida para ser usada en tiendas físicas Falabella. 2. Las gift cards canjeadas a partir del 20 de abril de 2020 pueden ser utilizadas en Falabella.com, solo por productos Falabella (NO VALIDA PARA PRODUCTOS MARKETPLACE). El sitio sólo acepta una gift card por compra y no se puede completar el monto total con otro medio de pago. 3. Presente su gift card digital directamente en caja desde su Smartphone (no se aceptarán gift cards impresas). 4. No utilizable en compras para listas de novios, Tottus, Sodimac Homecenter y ventas a través del Call Center. 5. No disponible para compras con factura. 6. Falabella no es responsable en casos de extravío o hurto de esta tarjeta. 7. Los Términos y condiciones de Uso se encuentran protocolizados con fecha 8 de julio de 2016 en la notaría Santiago Francisco Leiva Carvajal. 8. En tiendas Falabella puede utilizar hasta 3 gift cards por compra. 9. En Falabella.com solo puede utilizar una gift card por compra.',
    imagenGiftCardPNG: 'https://cdn.dcanje.com/dcanje.com/giftcards/1.png',
    imagenGiftCardJPG: 'https://cdn.dcanje.com/dcanje.com/giftcards/1.jpg',
    restMetodoPago: 1,
    img: 'https://cdn.dcanje.com/appDcanje2/wallet/logos/1.png',
    color: '#AAD500',
    descripcion:
      'Falabella es una de las compañías más grandes y consolidadas de América Latina. Desarrolla su actividad comercial a través de varias áreas de negocio, siendo las principales, la tienda por departamentos, grandes superficies, mejoramiento y construcción del hogar, compañía de financiamiento comercial CMR, banco, viajes y seguros Falabella.',
    idCategoria: 1,
    condiciones: [],
    cashBack: 0,
    cashBackCanje: 0,
  },
  montos: [
    {
      valorPuntos: 5000,
      valorMoneda: 5000,
      cantidad: 634,
    },
    {
      valorPuntos: 10000,
      valorMoneda: 10000,
      cantidad: 359,
    },
    {
      valorPuntos: 15000,
      valorMoneda: 15000,
      cantidad: 305,
    },
    {
      valorPuntos: 20000,
      valorMoneda: 20000,
      cantidad: 182,
    },
    {
      valorPuntos: 25000,
      valorMoneda: 25000,
      cantidad: 140,
    },
    {
      valorPuntos: 30000,
      valorMoneda: 30000,
      cantidad: 112,
    },
    {
      valorPuntos: 40000,
      valorMoneda: 40000,
      cantidad: 155,
    },
    {
      valorPuntos: 50000,
      valorMoneda: 50000,
      cantidad: 108,
    },
    {
      valorPuntos: 75000,
      valorMoneda: 75000,
      cantidad: 335,
    },
    {
      valorPuntos: 100000,
      valorMoneda: 100000,
      cantidad: 122,
    },
    {
      valorPuntos: 150000,
      valorMoneda: 150000,
      cantidad: 95,
    },
    {
      valorPuntos: 200000,
      valorMoneda: 200000,
      cantidad: 26,
    },
    {
      valorPuntos: 300000,
      valorMoneda: 300000,
      cantidad: 9,
    },
  ],
  sucursales: [
    {
      direccion: 'Ahumada 280, Santiago',
      latitud: '-33.439898',
      longitud: '-70.6510237',
      distancia: null,
    },
    {
      direccion: 'Avenida Kennedy 9001, Las Condes',
      latitud: '-33.3908732',
      longitud: '-70.5462835',
      distancia: null,
    },
    {
      direccion: 'Avenida Américo Vespucio 399, Local 500, Maipú',
      latitud: '-33.4813538',
      longitud: '-70.7518532',
      distancia: null,
    },
    {
      direccion: 'Andrés Bello 2433, Local 2400, Costanera Center',
      latitud: '-33.4175225',
      longitud: '-70.6081545',
      distancia: null,
    },
    {
      direccion: 'La Dehesa 1445, Local 1, Lo Barnechea',
      latitud: '-33.3575722',
      longitud: '-70.5153401',
      distancia: null,
    },
    {
      direccion: 'Nueva De Lyon 064, Providencia',
      latitud: '-33.4211867',
      longitud: '-70.6103369',
      distancia: null,
    },
    {
      direccion:
        "Avenida Libertador Bernardo O'Higgins N° 3470, Mall Plaza Alameda ",
      latitud: '-33.452018',
      longitud: '-70.6824171',
      distancia: null,
    },
    {
      direccion: 'Avenida Manquehue Sur 329, Las Condes',
      latitud: '-33.4111056',
      longitud: '-70.5665716',
      distancia: null,
    },
    {
      direccion: 'Vargas 457, Melipilla',
      latitud: '-33.6850759',
      longitud: '-71.2132304',
      distancia: null,
    },
    {
      direccion: 'Avenida Kennedy 5413, Las Condes',
      latitud: '-33.4019547',
      longitud: '-70.5796966',
      distancia: null,
    },
    {
      direccion: 'Avenida Larraín 5862, La Reina',
      latitud: '-33.4533161',
      longitud: '-70.5690072',
      distancia: null,
    },
    {
      direccion: 'Américo Vespucio 1737, Huechuraba',
      latitud: '-33.3662202',
      longitud: '-70.6785295',
      distancia: null,
    },
    {
      direccion: 'Américo Vespucio 1501, Cerrillos',
      latitud: '-33.5170528',
      longitud: '-70.7178874',
      distancia: null,
    },
    {
      direccion: 'Puente 530, Santiago',
      latitud: '-33.4370005',
      longitud: '-70.6513039',
      distancia: null,
    },
    {
      direccion: 'Avenida Vicuña Mackenna 7110, La Florida',
      latitud: '-33.5199353',
      longitud: '-70.5944145',
      distancia: null,
    },
    {
      direccion: 'Avenida Jorge Alessandri 20040, Local 1, San Bernardo',
      latitud: '-33.6316638',
      longitud: '-70.7103613',
      distancia: null,
    },
    {
      direccion: 'Avenida Camilo Henríquez 3296, Puente Alto',
      latitud: '-33.5698349',
      longitud: '-70.5566897',
      distancia: null,
    },
    {
      direccion: 'Avenida Balmaceda 3402, Calama',
      latitud: '-22.4510176',
      longitud: '-68.921297',
      distancia: null,
    },
    {
      direccion: "Avenida O'Higgins 681, Castro",
      latitud: '-42.4783793',
      longitud: '-73.7654167',
      distancia: null,
    },
    {
      direccion: 'El Roble 770 Local A, Piso 3, Chillán',
      latitud: '-36.6094189',
      longitud: '-72.1005552',
      distancia: null,
    },
    {
      direccion: 'Barros Arana 802, Piso 6, Concepción',
      latitud: '-36.8257473',
      longitud: '-73.0485227',
      distancia: null,
    },
    {
      direccion: "Bernardo O'Higgins 739, Piso 3, Copiapó",
      latitud: '-27.3729476',
      longitud: '-70.3248814',
      distancia: null,
    },
    {
      direccion: 'Peña 615, Curicó',
      latitud: '-34.9848507',
      longitud: '-71.2415267',
      distancia: null,
    },
    {
      direccion: 'Jorge Alessandri 3177 L/A 145. Plaza El Trébol, Talcahuano',
      latitud: '-36.7918845',
      longitud: '-73.0669734',
      distancia: null,
    },
    {
      direccion: 'Avenida Héroes De La Concepción 2555, Iquique',
      latitud: '-20.2316121',
      longitud: '-70.1417146',
      distancia: null,
    },
    {
      direccion: 'Condell 2639, Piso 3. Mall Antofagasta, Antofagasta ',
      latitud: '-23.6484301',
      longitud: '-70.4011392',
      distancia: null,
    },
    {
      direccion: 'Prolongación J. J. Pérez 12010, La Calera ',
      latitud: '-32.790517',
      longitud: '-71.191492',
      distancia: null,
    },
    {
      direccion: 'Alberto Solari 1400, Piso 2, La Serena ',
      latitud: '-29.9117687',
      longitud: '-71.2584926',
      distancia: null,
    },
    {
      direccion: 'Valdivia 472, Los Ángeles',
      latitud: '-37.4686958',
      longitud: '-72.3523126',
      distancia: null,
    },
    {
      direccion: 'Eleuterio Ramírez 840, Piso 2, Osorno',
      latitud: '-40.5731526',
      longitud: '-73.1360908',
      distancia: null,
    },
    {
      direccion: 'Prolongación Benavente 1075, Ovalle',
      latitud: '-30.597871',
      longitud: '-71.185006',
      distancia: null,
    },
    {
      direccion: 'Avenida Juan Soler Manfredini 101, Piso 2, Puerto Montt',
      latitud: '-41.4740514',
      longitud: '-72.9348169',
      distancia: null,
    },
    {
      direccion: 'Avenida Presidente Eduardo Frei Montalva 1110, Punta Arenas ',
      latitud: '-53.15622',
      longitud: '-70.9304626',
      distancia: null,
    },
    {
      direccion: 'Diego Portales 822, Piso 2, Quilpué',
      latitud: '-33.0467703',
      longitud: '-71.4418694',
      distancia: null,
    },
    {
      direccion: 'Sargento Cuevas 405, Piso 3, Rancagua',
      latitud: '-34.1686581',
      longitud: '-70.7408217',
      distancia: null,
    },
    {
      direccion: "Avenida Libertador Bernardo O'Higgins 1150, San Felipe",
      latitud: '-32.7564215',
      longitud: '-70.7228375',
      distancia: null,
    },
    {
      direccion: '1 Norte 1485, Piso 6, Talca',
      latitud: '-35.4268284',
      longitud: '-71.6558515',
      distancia: null,
    },
    {
      direccion: 'Arturo Prat 570, Piso 5, Temuco',
      latitud: '-38.7393444',
      longitud: '-72.5907131',
      distancia: null,
    },
    {
      direccion: 'Arauco 561 Mall Plaza de Los Ríos, Valdivia ',
      latitud: '-39.8158565',
      longitud: '-73.2421032',
      distancia: null,
    },
    {
      direccion: 'Independencia 1806, Valparaíso',
      latitud: '-33.0474318',
      longitud: '-71.6181242',
      distancia: null,
    },
    {
      direccion: 'Sucre 250, Viña del Mar',
      latitud: '-33.0253934',
      longitud: '-71.5522875',
      distancia: null,
    },
  ],
};
