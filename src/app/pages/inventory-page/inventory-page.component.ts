import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-inventory-page',
  templateUrl: './inventory-page.component.html',
  styleUrls: ['./inventory-page.component.scss'],
})
export class InventoryPageComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
   
   }
  id : any;
  isLoading = false;
  @Output() goBackEvent = new EventEmitter<any>();
  @Input() inventory :any;
  ngOnInit() {
    this.isLoading = true; 
    //this.id = this.route.snapshot.params['id'];
    // setTimeout(() => {
    //   this.isLoading = false;
    // },5000);

    console.log('passed inventory is ', this.inventory)
    this.isLoading = false;
    
  }

  goback()
  { 
    console.log('clicked go back')
    this.goBackEvent.emit();

  }

}
