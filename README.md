# mfe-module-federation
Spike exploring Micro Frontends with Module Federation

# To run
Within each of the `apps/...` directories, install the dependencies and start the dev server.
ie: 
- `cd apps/fv`, `npm install`, `npm run start`
- `cd apps/fv-footer`, `npm install`, `npm run start`
- `cd apps/fv-header`, `npm install`, `npm run start`
- `cd apps/fv-sidebar`, `npm install`, `npm run start`

After everything is running you can visit the combined app at:
http://localhost:8000/

Or each stand-alone app individually:
Header: http://localhost:8001/
Footer: http://localhost:8002/
Sidebar: http://localhost:8003/