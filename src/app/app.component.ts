import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent { 
    
    city: string;
    eta: string;
    etd: string; 
    isEtaOptionsDisabled: boolean;
    isEtdOptionsDisabled: boolean;
    ngOnInit() {
      this.isEtaOptionsDisabled = true;
      this.isEtdOptionsDisabled = true;
    }

    handleRadioButtonClick() {
      console.log('Variable city es ' +this.city);
      // Si  pulso en ETA
      if (this.city == 'Chicago'){
        console.log('Se ha clicado en Chicago');
        this.isEtaOptionsDisabled = false;
        this.isEtdOptionsDisabled = true;
        this.eta = 'asc';
        this.etd = '';
      }
      // Si pulso en ETD
      else if (this.city == 'Los Angeles'){
        console.log('Se ha clicado en Los Angeles');
        this.isEtdOptionsDisabled = false;
        this.isEtaOptionsDisabled = true;
        this.etd = 'asc';
        this.eta = '';
      }
      // Si pulso en cualquier otro boton
      else if (this.city == 'New York' || this.city == 'San Francisco'){
        console.log('Se ha clicado en un botón de radio.');
        this.isEtaOptionsDisabled = true;
        this.isEtdOptionsDisabled = true;
        this.eta ='';
        this.etd = '';
      }
    }
    
}
