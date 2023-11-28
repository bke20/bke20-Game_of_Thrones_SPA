<template>
    <div class="container-fluid p-0">
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom  p-4"
            style="background-color: rgb(229,231,235);">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <img src="got.png" width="280" height="50" />
            </a>
            <ul class="nav nav-pills">
                <li class="nav-item">
                    <router-link to="/" class="nav-link" exact :class="{ 'active': $route.path === '/' }">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/houses" class="nav-link" exact
                        :class="{ 'active': $route.path === '/houses' }">Houses</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/quotes" class="nav-link" exact
                        :class="{ 'active': $route.path === '/quotes' }">Quotes</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/persons" class="nav-link" exact
                        :class="{ 'active': $route.path === '/persons' }">Persons</router-link>
                </li>
            </ul>
        </header>
        <div id="outerDiv">
            <div id="innerDiv">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavigationComponent'
}
</script>


