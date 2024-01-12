import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  newsList = [
    {
      tit: 'Reos lanzan cadáver embalado desde la cárcel de Machala hacia la calle',
      des: 'El cadáver estaba embalado en un plástico transparente y fue lanzado hacia la vereda.',
      img: 'https://www.ecuavisa.com/binrepository/1006x539/0c0/0d0/none/11705/YOVX/whatsapp-image-2024-01-12-at-07-13_1327726_20240112071440.jpg',
    },
    {
      tit: 'Gobierno anuncia que se pedirá certificados de antecedentes penales a personas extranjeras',
      des: 'El anuncio se lo hizo hoy, jueves 11 de enero de 2024, luego de que el Gobierno decretara el estado de excepción a escala nacional',
      img: 'https://www.ecuavisa.com/binrepository/1201x901/0c150/1200d600/none/11705/IVFX/e646683d-906a-41c4-8105-dfe477d68fbe_1327243_20240111200821.jpg',
    },
    {
      tit: 'Correa enfurece en una entrevista al ser consultado si quiere volver a ser presidente',
      des: 'El Exmandatario reaccionó de forma inesperada a una pregunta del periodista Luis Carlos Vélez, en la radio La FM, de RCN de Colombia.',
      img: 'https://www.ecuavisa.com/binrepository/889x500/0c0/1200d600/none/11705/TFXT/correa_1326392_20240111141158.jpg',
    },
    {
      tit: 'Daniel Noboa presenta los modelos de las cárceles de máxima seguridad en Pastaza y Santa Elena',
      des: 'La construcción de estos centros carcelarios tomará entre 10 y 11 meses.',
      img: 'https://www.ecuavisa.com/binrepository/1200x766/0c108/1200d600/none/11705/JITN/53457670501-ea7510433a-o_1326657_20240111143824.jpg',
    },
     ];
  constructor() {}

}
