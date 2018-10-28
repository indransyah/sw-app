(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{23:function(e,t,n){"use strict";var a=n(0),s=n.n(a),i=n(50),l=n(22);t.a=class extends s.a.Component{constructor(e){super(e),this.toggle=this.toggle.bind(this),this.state={isOpen:!1}}toggle(){this.setState({isOpen:!this.state.isOpen})}render(){return s.a.createElement(l.t,{color:"light",light:!0,expand:"md"},s.a.createElement(i.a,{to:"/"},s.a.createElement(l.u,{href:""},"Star Wars App")),s.a.createElement(l.v,{onClick:this.toggle}),s.a.createElement(l.k,{isOpen:this.state.isOpen,navbar:!0},s.a.createElement(l.q,{className:"ml-auto",navbar:!0},s.a.createElement(l.r,null,s.a.createElement(i.a,{to:"/about"},s.a.createElement(l.s,null,"About"))))))}}},27:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(0),s=n.n(a);function i(){return s.a.createElement("div",{className:"text-center"},"No Data")}},28:function(e,t,n){"use strict";n.d(t,"e",function(){return s}),n.d(t,"b",function(){return i}),n.d(t,"c",function(){return l}),n.d(t,"f",function(){return c}),n.d(t,"d",function(){return h}),n.d(t,"g",function(){return m}),n.d(t,"i",function(){return E}),n.d(t,"h",function(){return _}),n.d(t,"a",function(){return I});const a=e=>({type:"RECEIVE_PEOPLE",data:e}),s=(e=1)=>t=>(t({type:"REQUEST_PEOPLE"}),fetch(`https://swapi.co/api/people/?page=${e}`).then(e=>{if(e.ok)return e.json()}).then(e=>t(a(e))).catch(e=>t(a({results:[]})))),i=()=>({type:"CLEAR_PEOPLE"}),l=()=>({type:"CLEAR_PERSON"}),c=e=>t=>(t({type:"REQUEST_PERSON"}),fetch(`https://swapi.co/api/people/${e}/`,{mode:"cors"}).then(e=>e.ok?e.json():Promise.reject(new Error("Not found"))).then(e=>{const n=e.films.length?0:null,a=e.species.length?0:null,s=e.vehicles.length?0:null,i=e.starships.length?0:null;t(((e,t,n,a,s)=>({type:"RECEIVE_PERSON",data:e,selectedFilmIndex:t,selectedSpeciesIndex:n,selectedVehicleIndex:a,selectedStarshipIndex:s}))({name:e.name,height:e.height,mass:e.mass,hair_color:e.hair_color,skin_color:e.skin_color,eye_color:e.eye_color,birth_year:e.birth_year,gender:e.gender,films:e.films,species:e.species,vehicles:e.vehicles,starships:e.starships},n,a,s,i)),t(d(e.homeworld.split("/")[5])),e.films.length&&t(h(e.films[0].split("/")[5])),e.species.length&&t(m(e.species[0].split("/")[5])),e.vehicles.length&&t(E(e.vehicles[0].split("/")[5])),e.starships.length&&t(_(e.starships[0].split("/")[5]))}).catch(console.error)),r=e=>({type:"RECEIVE_PLANET",data:e}),d=e=>t=>(t({type:"REQUEST_PLANET"}),fetch(`https://swapi.co/api/planets/${e}/`,{mode:"cors"}).then(e=>e.ok?e.json():Promise.reject(new Error("Not found"))).then(e=>t(r({name:e.name,rotation_period:e.rotation_period,orbital_period:e.orbital_period,diameter:e.diameter,climate:e.climate,gravity:e.gravity,terrain:e.terrain,surface_water:e.surface_water,population:e.population}))).catch(e=>t(r({})))),o=e=>({type:"RECEIVE_FILM",data:e}),h=e=>t=>(t({type:"REQUEST_FILM"}),fetch(`https://swapi.co/api/films/${e}/`,{mode:"cors"}).then(e=>e.ok?e.json():Promise.reject(new Error("Not found"))).then(e=>t(o({title:e.title,episode_id:e.episode_id,opening_crawl:e.opening_crawl,director:e.director,producer:e.producer,release_date:e.release_date}))).catch(e=>t(o({})))),p=e=>({type:"RECEIVE_SPECIES",data:e}),m=e=>t=>(t({type:"REQUEST_SPECIES"}),fetch(`https://swapi.co/api/species/${e}/`,{mode:"cors"}).then(e=>e.ok?e.json():Promise.reject(new Error("Not found"))).then(e=>t(p({name:e.name,classification:e.classification,designation:e.designation,average_height:e.average_height,skin_colors:e.skin_colors,hair_colors:e.hair_colors,eye_colors:e.eye_colors,average_lifespan:e.average_lifespan,language:e.language}))).catch(e=>t(p({})))),g=e=>({type:"RECEIVE_VEHICLE",data:e}),E=e=>t=>(t({type:"REQUEST_VEHICLE"}),fetch(`https://swapi.co/api/vehicles/${e}/`,{mode:"cors"}).then(e=>e.ok?e.json():Promise.reject(new Error("Not found"))).then(e=>t(g({name:e.name,model:e.model,manufacturer:e.manufacturer,cost_in_credits:e.cost_in_credits,length:e.length,max_atmosphering_speed:e.max_atmosphering_speed,crew:e.crew,passengers:e.passengers,cargo_capacity:e.cargo_capacity,consumables:e.consumables,vehicle_class:e.vehicle_class}))).catch(e=>t(g({})))),u=e=>({type:"RECEIVE_STARSHIP",data:e}),_=e=>t=>(t({type:"REQUEST_STARSHIP"}),fetch(`https://swapi.co/api/starships/${e}/`,{mode:"cors"}).then(e=>e.ok?e.json():Promise.reject(new Error("Not found"))).then(e=>t(u({name:e.name,model:e.model,manufacturer:e.manufacturer,cost_in_credits:e.cost_in_credits,length:e.length,max_atmosphering_speed:e.max_atmosphering_speed,crew:e.crew,passengers:e.passengers,cargo_capacity:e.cargo_capacity,consumables:e.consumables,hyperdrive_rating:e.hyperdrive_rating,MGLT:e.MGLT,starship_class:e.starship_class}))).catch(e=>t(u({})))),I=(e,t)=>({type:`CHANGE_${e.toUpperCase()}_INDEX`,index:t})},33:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(7),l=n(22),c=n(28);const r={color:"#111111",cursor:"pointer"};function d(e){return s.a.createElement("div",{className:"text-right"},s.a.createElement(l.f,{onClick:t=>{t.preventDefault(),e.handleIndexChange(e.type,+e.selectedIndex-1)},style:Object.assign({},r,{visibility:e.selectedIndex?"visible":"hidden"})},"<<"),s.a.createElement("span",{style:{margin:"0 1.25rem"}},+e.selectedIndex+1," of ",e.length),s.a.createElement(l.f,{onClick:t=>{t.preventDefault(),e.handleIndexChange(e.type,+e.selectedIndex+1)},style:Object.assign({},r,{visibility:+e.selectedIndex+1===e.length?"hidden":"visible"})},">>"))}var o=n(27),h=n(5);function p(e){return s.a.createElement(l.b,null,s.a.createElement(l.e,null,e.name.toUpperCase()),s.a.createElement(l.c,{style:{minHeight:"300px"}},e.isLoading&&s.a.createElement(h.a,null),!e.isLoading&&!Object.keys(e.data).length&&s.a.createElement(o.a,null),!e.isLoading&&Object.keys(e.data).length>0&&s.a.createElement(s.a.Fragment,null,s.a.createElement(l.i,null,e.data.title," | ",e.data.release_date),s.a.createElement(l.g,null,e.data.director," | ",e.data.producer),s.a.createElement(l.h,null,e.data.opening_crawl),!!length&&s.a.createElement(d,{selectedIndex:e.selectedIndex,length:e.length,type:e.name,handleIndexChange:e.handleIndexChange}))))}function m(e){return s.a.createElement(l.b,null,s.a.createElement(l.e,null,e.name.toUpperCase()),s.a.createElement(l.c,{style:{minHeight:"300px"}},e.isLoading&&s.a.createElement(h.a,null),!e.isLoading&&!Object.keys(e.data).length&&s.a.createElement(o.a,null),!e.isLoading&&s.a.createElement(s.a.Fragment,null,s.a.createElement(l.h,null,s.a.createElement(l.m,null,Object.keys(e.data).filter(t=>!Array.isArray(e.data[t])).map(t=>s.a.createElement(l.n,{key:t,row:!0},s.a.createElement(l.p,{sm:5},t.replace(/_/g," ").replace(/(^| )(\w)/g,e=>` ${e.toUpperCase()}`)),s.a.createElement(l.j,{sm:7},s.a.createElement(l.o,{bsSize:"sm",value:e.data[t],readOnly:!0})))))),!!e.length&&s.a.createElement(d,{selectedIndex:e.selectedIndex,length:e.length,type:e.name,handleIndexChange:e.handleIndexChange}))))}var g=n(23);t.default=Object(i.b)(e=>({isPersonFetching:e.person.isFetching,isPlanetFetching:e.planet.isFetching,isFilmFetching:e.film.isFetching,isSpeciesFetching:e.species.isFetching,isVehicleFetching:e.vehicle.isFetching,isStarshipFetching:e.starship.isFetching,person:e.person.data,planet:e.planet.data,film:e.film.data,species:e.species.data,vehicle:e.vehicle.data,starship:e.starship.data,selectedFilmIndex:e.person.selectedFilmIndex,selectedSpeciesIndex:e.person.selectedSpeciesIndex,selectedVehicleIndex:e.person.selectedVehicleIndex,selectedStarshipIndex:e.person.selectedStarshipIndex}))(class extends s.a.Component{constructor(e){super(e),this.handleIndexChange=this.handleIndexChange.bind(this)}componentDidMount(){const{dispatch:e,match:t}=this.props;e(Object(c.f)(t.params.id))}componentWillUnmount(){const{dispatch:e}=this.props;e(Object(c.c)())}componentDidUpdate(e){const{dispatch:t,selectedFilmIndex:n,selectedSpeciesIndex:a,selectedVehicleIndex:s,selectedStarshipIndex:i,person:{films:l,species:r,vehicles:d,starships:o}}=this.props;n!==e.selectedFilmIndex&&t(Object(c.d)(l[n].split("/")[5])),a!==e.selectedSpeciesIndex&&t(Object(c.g)(r[a].split("/")[5])),s!==e.selectedVehicleIndex&&t(Object(c.i)(d[s].split("/")[5])),i!==e.selectedStarshipIndex&&t(Object(c.h)(o[i].split("/")[5]))}handleIndexChange(e,t){const{dispatch:n}=this.props;n(Object(c.a)(e,t))}render(){const{isPersonFetching:e,isPlanetFetching:t,isFilmFetching:n,isSpeciesFetching:a,isVehicleFetching:i,isStarshipFetching:c,person:r,planet:d,film:o,species:h,vehicle:E,starship:u,selectedSpeciesIndex:_,selectedFilmIndex:I,selectedVehicleIndex:f,selectedStarshipIndex:x}=this.props;return s.a.createElement(s.a.Fragment,null,s.a.createElement(g.a,null),s.a.createElement(l.l,{fluid:!0},s.a.createElement(l.z,null,s.a.createElement(l.j,{sm:"12"},s.a.createElement("h1",null,r.name)),s.a.createElement(l.j,{sm:"12"},s.a.createElement(l.z,null,s.a.createElement(l.d,{style:{marginBottom:"1rem"}},s.a.createElement(m,{name:"profile",isLoading:e,data:r}),s.a.createElement(m,{name:"homeworld",isLoading:e||t,data:d}),s.a.createElement(p,{name:"films",isLoading:e||n,data:o,selectedIndex:I,length:r.films&&r.films.length,handleIndexChange:this.handleIndexChange})),s.a.createElement(l.d,null,s.a.createElement(m,{name:"species",isLoading:e||a,data:h,selectedIndex:_,length:r.species&&r.species.length,handleIndexChange:this.handleIndexChange}),s.a.createElement(m,{name:"vehicles",isLoading:e||i,data:E,selectedIndex:f,length:r.vehicles&&r.vehicles.length,handleIndexChange:this.handleIndexChange}),s.a.createElement(m,{name:"starships",isLoading:e||c,data:u,selectedIndex:x,length:r.starships&&r.starships.length,handleIndexChange:this.handleIndexChange})))))))}})}}]);