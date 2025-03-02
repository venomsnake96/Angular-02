import { Routes } from "@angular/router";
import { DisciplinasComponent } from "./disciplinas.component";
import { DiscMainComponent } from "./disciplinasMain/disciplinasMain";
import { GymnasticsComponent } from "./gimnasia/gimnasia.component";
import { PorraComponent } from "./porra/porra.component";
import { TelasComponent } from "./telas/telas.component";
import { TrainigComponent } from "./entrenamiento/entrenamiento.component";

export const routes: Routes = [
  {
    path: '',
    component: DisciplinasComponent,
    children: [
      {path: '', component: DiscMainComponent},
      {path: 'gimnasia', title: 'Gimnasia', component: GymnasticsComponent},
      {path: 'porra', title: 'Porra', component: PorraComponent},
      {path: 'telas', title: 'Telas', component: TelasComponent },
      {path: 'entrenamiento', title: 'Competencias', component: TrainigComponent}
    ]
  }
]
