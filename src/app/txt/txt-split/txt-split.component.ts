import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../../component/page-header/page-header.component';
import { FormsModule } from '@angular/forms';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SplitComponent } from '../../component/split/split.component';
import { NzUploadXHRArgs } from 'ng-zorro-antd/upload';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-txt-split',
  templateUrl: './txt-split.component.html',
  imports: [PageHeaderComponent, NzInputNumberModule, FormsModule, NzButtonModule, SplitComponent],
  styleUrl: './txt-split.component.less'
})
export class TxtSplitComponent {
  customRequest = (item: NzUploadXHRArgs): Subscription => {
    const file = item.file;
    const reader = new FileReader();
    console.log("file", file)
    return new Subscription()
  }
}
