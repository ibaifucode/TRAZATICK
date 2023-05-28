import { Component } from '@angular/core';
import { Donde, Proveedor, Provincia, Raee, Region, TipoLectura, TipoRAEE } from '../../interfaces/raee.interface';

@Component({
  selector: 'app-raee-filter-panel',
  templateUrl: './raee-filter-panel.component.html',
  styleUrls: ['./raee-filter-panel.component.css']
})
export class RaeeFilterPanelComponent {
  public raeeabuscar: Raee = {
    CargaDatosLecturasId: 0, // Asigna el valor adecuado
    FechaLectura: '',
    CodigoEtiqueta: '',
    GeoPosicion: '',
    TipoLectura: TipoLectura.Entrada,
    Donde: Donde.Cac,
    Region: Region.Cantabria,
    Provincia: Provincia.Cantabria,
    Proveedor: Proveedor.CantabriaRecycling,
    TipoRAEE: TipoRAEE.FR1Frigoríficos,
    DescripcionResiduo: '',
    Marca: '',
    Modelo: '',
    Peso: ''
  };
  public filtrolectura: boolean = false;
  public filtroRAEE: boolean = false;

  // Métodos para obtener las opciones válidas de cada casilla desplegable
  getTipoLecturaOptions(): string[] {
    return Object.values(TipoLectura);
  }

  getDondeOptions(): string[] {
    return Object.values(Donde);
  }

  getRegionOptions(): string[] {
    return Object.values(Region);
  }

  getProvinciaOptions(): string[] {
    return Object.values(Provincia);
  }

  getProveedorOptions(): string[] {
    return Object.values(Proveedor);
  }

  getTipoRAEEOptions(): string[] {
    return Object.values(TipoRAEE);
  }
}
