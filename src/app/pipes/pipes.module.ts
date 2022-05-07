import { NgModule } from '@angular/core';
import { OperatorFriendlyPipe } from './operator-friendly.pipe';
import { TextTruncatePipe } from './text-truncate.pipe';

@NgModule({
  declarations: [TextTruncatePipe, OperatorFriendlyPipe],
  exports: [TextTruncatePipe, OperatorFriendlyPipe],
})
export class PipesModule {}
