import {RouteType} from "../models";

type GroupedRoutes = Record<string, RouteType[]>

export function groupRoutes(routes: RouteType[]): GroupedRoutes {

    return routes.reduce((groupedRoutes, route) => {
        const {group, ...rest} = route;
        groupedRoutes[group] = groupedRoutes[group] || []
        groupedRoutes[group].push({group, ...rest});
        return groupedRoutes;
    }, {} as GroupedRoutes);
}
