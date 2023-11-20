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