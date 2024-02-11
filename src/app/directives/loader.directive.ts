import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { LoaderComponent } from '../components/loader/loader.component';

@Directive({
  selector: '[loader]',
  standalone: true,
})
export class LoaderDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}
    private loadingFactory: ComponentFactory<LoaderComponent> = this.componentFactoryResolver.resolveComponentFactory(LoaderComponent);
    private loadingComponent!: ComponentRef<LoaderComponent>;

  @Input() set loader(argState: boolean | null) {
    if (argState) {
      this.viewContainer.clear();
      this.loadingComponent = this.viewContainer.createComponent(this.loadingFactory);
    } else {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
