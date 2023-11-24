## Microfrontend in React

### Inflexible Requirements

1. Zero coupling between child projects
   - No importing of functions/objects/classes/etc
   - No shared state/contexts
   - Shared libraries through MF(Module Federation) is ok
2. Near-zero coupling between container and chile apps
   - Container shouldn't assume that a child is using a particular framework
   - Any necessary communication done with callbacks or simple events
3. CSS from one project shouldn't affect another
4. Version control (monorepo vs seprate) shouldn't have any impact on the overall project
5. Container should be able to decide to always use the latest version of a microfontend OR specify a specific version
   - Container will always use the latest version of a child app (doesn't require a redeploy of container)
   - Container can specify exactly what version of a child it wants to use (requires a redeploy to change)

### Inflexible requirements around Navigation

1. Both the Container and Individual SubApp need routing feature
   1. Users can navigate around to different subapps using routing logic built into the Container
   2. Users can navigate around in a subapp using routing logic built into the subapp itself
   3. Not all subapps will require routing
2. Subapp might need to add in new pages/routes all the time
   1. New routes to a subapp shoudn't require a redeploy of the container
3. We might need to to show two or more microfrontends at the same time
   1. This will occur all the time if we have some kind of sidebar nav that is built as a separate microfrontend
4. We want to use off-the-shelf routing solutions
   1. Building a routing library can be hard - we don't want to author a new one
   2. Some amount of custom coding is OK
5. We need navigation features for sub-apps in both hosted mode and in isolation
   1. Developing for each environment should be easy - a developer should immediately be able to see what path they are visiting
6. If different apps need to communicate information about routing, it should be done in as generic a fashion as possible
   1. Each app might be using a completely different navigation framework
   2. We might swap out or upgrade navigation libraries all the time - shouldn't require a rewrite of the rest of the app
