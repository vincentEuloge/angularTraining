import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlSegment, CanLoad} from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { Route } from "@angular/compiler/src/core";

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
       return this.canEnterRouter();
    }

    canLoad(route: Route, segments: UrlSegment[]): boolean {
        return this.canEnterRouter();
    }

    private canEnterRouter(): boolean {
        if (this.authService.isLoggedIn()) {
            return true;
        } else {
            this.router.navigateByUrl("/");
            return false;
        }
    }
}
