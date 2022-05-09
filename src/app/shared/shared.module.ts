import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { IconsProviderModule } from './modules/icons-provider.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';

@NgModule({
  declarations: [
    PaginatorComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    //components
    PaginatorComponent,
    //modules
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzUploadModule,
    NzGridModule,
    NzSelectModule
  ]
})
export class SharedModule { }
