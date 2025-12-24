import { IconMenu } from '@shared/icons/icon-menu/icon-menu';
import { Component, viewChild } from '@angular/core';
import { Menu, MenuContent, MenuItem, MenuTrigger } from '@angular/aria/menu';
import { OverlayModule } from '@angular/cdk/overlay';
import { IconEdit } from '@shared/icons/icon-edit/icon-edit';
import { IconDelete } from '@shared/icons/icon-delete/icon-delete';

@Component({
  selector: 'button-edit',
  imports: [
    IconMenu,
    Menu,
    MenuContent,
    MenuItem,
    MenuTrigger,
    OverlayModule,
    IconEdit,
    IconDelete,
  ],
  templateUrl: './button-edit.html',
  styleUrl: './button-edit.scss',
})
export class ButtonEdit {
  formatMenu = viewChild<Menu<string>>('formatMenu');
  categorizeMenu = viewChild<Menu<string>>('categorizeMenu');
}
