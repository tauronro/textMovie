import { NgModule } from '@angular/core';
import { CustomMaterialModule } from './custom-material.module';

@NgModule({
  imports: [CustomMaterialModule],
  exports: [CustomMaterialModule],
})
export class SharedModule {}
