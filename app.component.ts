import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';





export type EditorType = 'name' | 'profile';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <h1>Contacts</h1>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


<form class="example" action="action_page.php">
 <input type="text" placeholder="Search.." name="search" style="width: 800px;">
&nbsp;
  
   <button class="btn" style="background-color: lightblue;" type="button" (click)="toggleEditor('profile')" >
   <i class="fa fa-plus"></i> Add</button>  

</form>



    <app-profile-editor *ngIf="showProfileEditor"></app-profile-editor> 
  `,
  styles: [
    `
      nav button {
        padding: 1rem;
        font-size: inherit;
      }
    `,
  ],
  imports: [
    // NameEditorComponent,
    ProfileEditorComponent,
    NgIf,
    ReactiveFormsModule,
    
    
  ],
})

export class AppComponent {
  
openDialog(arg0: string,arg1: string) {
throw new Error('Method not implemented.');
}
  editor: EditorType = 'name';

  get showNameEditor() {
    return this.editor === 'name';
  }

  get showProfileEditor() {
    return this.editor === 'profile';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
 }


