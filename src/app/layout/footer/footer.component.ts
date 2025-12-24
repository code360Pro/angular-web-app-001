import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [],
    template: `
    <footer class="footer mt-auto py-3 bg-light">
      <div class="container text-center">
        <span class="text-muted">© 2025 ERP System. All rights reserved.</span>
      </div>
    </footer>
  `,
    styles: []
})
export class FooterComponent { }
