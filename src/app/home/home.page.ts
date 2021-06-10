import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private apiService:ApiService) {
    // this.createDados();
    // this.readData();
    this.readAll();
    // this.updateData();
    this.deleteDado();
  }

  createDados(){
    const data:any = {
      title: 'Victor',
      body: 'Estou testando um app, com uma api publica.',
      userId: 1,
    };

    this.apiService.createData(data).subscribe(data => {
      console.log(data);
    });
    
  }
  readData(){
    this.apiService.readData().subscribe(data => {
      console.log(data);
    });
  }
  readAll(){
    this.apiService.readData().subscribe(dados => {
      console.log(dados);
    })
  }

  updateData(){
    const data: any = {
      id:1,
      title: 'Oliveira Victor',
    body: 'Tamo no github',
    userId: 11,
    };
    this.apiService.updateData(data).subscribe(data => { console.log(data);})
  }

  deleteDado(){
    return this.apiService.deleteData().subscribe(data => { console.log('Deletado ', data); })

  }
}
