import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: any[] = [
    {
      name: "Electronics",
      src: 'http://im.hunt.in/cg/Alappuzha/City-Guide/electronic-stores.jpg'
    },
    {
      name: "Fashion",
      src: 'https://static01.nyt.com/images/2012/03/01/fashion/01VIRTUAL_SPAN/01ZVIRTUAL-jumbo.jpg'
    },
    {
      name: "Grocery",
      src: 'https://images.theconversation.com/files/282104/original/file-20190701-105182-1q7a7ji.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip'
    },
    {
      name: "Sports",
      src: 'https://media.timeout.com/images/100479313/660/370/image.jpg'
    },
    {
      name: "Recharge",
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsBedEcZO6Xtm_lOX3Q7O4FrsJIT7yFdXM3QZ4XCg8hYQmBPxT&s'
    },
    {
      name: "Other",
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Cp2_T8esJs8_S6Aigzm9-r7NrJVA-N3YhAPTUFgP5LFBhGTFFQ&s'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
