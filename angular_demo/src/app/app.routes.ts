import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)
},
{
    path: 'todos',
    pathMatch: 'full',
    loadComponent: () => import('./todos/todos.component').then(c=> c.TodosComponent)
}
];
