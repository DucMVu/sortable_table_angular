import {NgModule} from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  exports: [
    // DragDropModule,
    // MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
  ]
})
export class DemoMaterialModule {}