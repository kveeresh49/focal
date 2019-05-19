import { Component, OnInit, ElementRef } from '@angular/core';
import { TreeView, DragAndDropEventArgs, NodeSelectEventArgs } from '@syncfusion/ej2-navigations';
import { closest } from '@syncfusion/ej2-base';
import { Inject, ViewChild, ViewEncapsulation } from '@angular/core';
import { ListView } from '@syncfusion/ej2-lists';
import { $ } from 'protractor';
import { TreeViewComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-hiraial-view',
  templateUrl: './hiraial-view.component.html',
  styleUrls: ['./hiraial-view.component.css']
})
export class HiraialViewComponent implements OnInit {
  @ViewChild('list')
  public list: ListView;
public show:boolean = false;
  @ViewChild('tree')
  public tree: TreeViewComponent;

  public allowDragAndDrop: boolean = true;
  // tslint:disable-next-line:member-ordering
  public productTeam1: Object[] = [
    {
      id: 't1', name: 'Project', expanded: true,
      child: [
        {
          id: 't2', pid: 't1', name: 'epics', child: [
            {
              id: 't3', pid: 't1', name: 'Features', child: [
                { id: 't4', pid: 't1', name: 'Stories' }
              ]
            }
          ]
        },
      ]
    },
    {
      id: 't5', name: 'Project1', expanded: true,
      child: [
        {
          id: 't6', pid: 't5', name: 'epics', child: [
            {
              id: 't7', pid: 't5', name: 'Features', child: [
                { id: 't8', pid: 't5', name: 'Stories' }
              ]
            }
          ]
        },
      ]
    },

    {
      id: 't9', name: 'Project2', expanded: true,
      child: [
        {
          id: 't10', pid: 't9', name: 'epics', child: [
            {
              id: 't11', pid: 't9', name: 'Features', child: [
                { id: 't12', pid: 't9', name: 'Stories' }
              ]
            }
          ]
        },
      ]
    },
    {
      id: 't13', name: 'Project2', expanded: true,
      child: [
        {
          id: 't14', pid: 't13', name: 'epics', child: [
            {
              id: 't15', pid: 't13', name: 'Features', child: [
                { id: 't16', pid: 't13', name: 'Stories' }
              ]
            }
          ]
        },
      ]
    },

  ];
  public field: Object = { dataSource: this.productTeam1, id: 'id', text: 'name', child: 'child' };
  public allowMultiSelections: boolean = true;
  public allowDragAndDrops: boolean = true;
  public id: number = 1;
  public newData: { [key: string]: Object }[] = []
  selectedTab: string;
  constructor() {

  }

  ngOnInit() {
    console.log(this.field);
    this.selectedTab = 'Hierarchical'

  }



  public onDragStop(args: any): void {
    let targetEle: any = closest(args.target, '.e-droppable');
    targetEle = targetEle ? targetEle : args.target;
    // Check the target as ListView or not
    // if (targetEle && targetEle.classList.contains('custom-list')) {
    //   args.cancel = true;
    //    this.newData = [];
    //   if (args.draggedNode.classList.contains('e-active')) {
    //     var dragNode: any = closest(args.draggedNode, '.e-treeview');
    //     var selNodes = dragNode.ej2_instances[0].selectedNodes;
    //     for (let i: number = 0, len: number = selNodes.length; i < len; i++) {
    //       let nodeEle: Element = document.querySelector('[data-uid="' + selNodes[i] + '"]').querySelector('.e-list-text');
    //       let nodeText: string = nodeEle.textContent;
    //       let newNode: { [key: string]: Object } = { id: 'l' + this.id, text: nodeText, class: 'custom-delete', iconId: 'i' + this.id };
    //       this.id++;
    //       this.newData.push(newNode);
    //     }
    //   } else {
    //     let text: string = 'text';
    //     let nodeText: string = args.draggedNodeData[text] as string;
    //     let newNode: { [key: string]: Object } = { id: 'l' + this.id, text: nodeText, class: 'custom-delete', iconId: 'i' + this.id };
    //     this.id++;
    //     this.newData.push(newNode);
    //   }
    //   // Add collection of node to ListView
    //   var listObj = this.list;
    //   listObj.addItem(this.newData, undefined);
    // }
  }

  public nodeSelected(e: NodeSelectEventArgs) {

    alert("The selected node's id: " + this.tree.selectedNodes); // To alert the selected node's id.
    // if (document.getElementById('list') && document.getElementById('list').addEventListener !== null) {
    //   document.getElementById('list').addEventListener('mousedown', (event: any) => {
    //     if (event.target.classList.contains('custom-delete')) {
    //       let node: Element = closest(event.target, 'li');
    //       var listObj = this.list;
    //       listObj.removeItem(node);
    //     }
    //   });
    //   document.getElementById('overlay').addEventListener('mousedown', (event: any) => {
    //     document.getElementById('overlay').style.display = 'none';
    //   });
    // }


  }

  toggleClick(event) {

    if(event === 'Structural') {
      this.show = true;
      this.selectedTab = 'Structural'
    } else {
      this.show = false;
      this.selectedTab = 'Hierarchical'
    }
    
  }

}




