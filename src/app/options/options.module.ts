import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {OptionsRoutingModule} from './options-routing.module';
import {OptionsComponent} from './pages/options/options.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [OptionsComponent],
  imports: [CommonModule, OptionsRoutingModule, MatButtonModule, MatInputModule, ReactiveFormsModule, MatDividerModule]
})
export class OptionsModule {
}
