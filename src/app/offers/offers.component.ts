import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  offers = [
    {
      title: 'Ofsgv svst bst - 1',
      desc: 'dvnksrnvskrnvgkssgrvrjjjjjjjjj jjjjjjjjjjjjjjjjjsr ggggggggggggggggk mmmmmmmmmmmmv fffffffffffffffn        cdaekmfvjnsfkv fkmnjfvnjdnj',
    },
    {
      title: 'Ofsgv svst bst - 2',
      desc: 'dvnksrnvskrnvgkssgrvrjjjjjjjjj jjjjjjjjjjjjjjjjjsr ggggggggggggggggk mmmmmmmmmmmmv fffffffffffffffn        cdaekmfvjnsfkv fkmnjfvnjdnj',
    },
    {
      title: 'Ofsgv svst bst - 3',
      desc: 'dvnksrnvskrnvgkssgrvrjjjjjjjjj jjjjjjjjjjjjjjjjjsr ggggggggggggggggk mmmmmmmmmmmmv fffffffffffffffn        cdaekmfvjnsfkv fkmnjfvnjdnj',
    },
    {
      title: 'Ofsgv svst bst - 4',
      desc: 'dvnksrnvskrnvgkssgrvrjjjjjjjjj jjjjjjjjjjjjjjjjjsr ggggggggggggggggk mmmmmmmmmmmmv fffffffffffffffn        cdaekmfvjnsfkv fkmnjfvnjdnj',
    },
    {
      title: 'Ofsgv svst bst - 5',
      desc: 'dvnksrnvskr nvgkssgrvrjjjjjjjj jjjjjjjjjjjjjjjjjjsr ggggggggggggggggk mmmmmmmmmmmmv fffffffffffffffn        cdaekmfvjnsfkv fkmnjfvnjdnj',
    },
    {
      title: 'Ofsgv svst bst - 3',
      desc: 'dvnksrnvskr nvgkssgrvrjjjjjjjj jjjjjjjjjjjjjjjjjjsr ggggggggggggggggk mmmmmmmmmmmmv fffffffffffffffn        cdaekmfvjnsfkv fkmnjfvnjdnj',
    },
    {
      title: 'Ofsgv svst bst - 4',
      desc: 'dvnksrnvskr nvgkssgrvrjjjjjjjj jjjjjjjjjjjjjjjjjjsr ggggggggggggggggk mmmmmmmmmmmmv fffffffffffffffn        cdaekmfvjnsfkv fkmnjfvnjdnj',
    },
    {
      title: 'Ofsgv svst bst - 5',
      desc: 'dvnksrnvskr nvgkssgrvrjjjjjjjj jjjjjjjjjjjjjjjjjjsr ggggggggggggggggk mmmmmmmmmmmmv fffffffffffffffn        cdaekmfvjnsfkv fkmnjfvnjdnj',
    }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.snapshot.params['category'];
  }

}
