<template>
  <div id="app">
    <!-- navbar -->
    <div>
      <nav class="navbar navbar-expand navbar-dark bg-primary">
        <a class="navbar-brand">
          <img class height="90px" alt="Notify logo" src="./assets/whitelogo.png" />
        </a>
        <a class="navbar-brand" href="#">NOTIFY Admin Mode</a>

        <ul class="navbar-nav ml-auto">
          <div class="topbar-divider d-none d-sm-block"></div>

          <!-- Nav Item - User Information -->
          <li class="nav-item dropdown no-arrow">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="mr-2 d-none d-lg-inline text-gray-600 small">AMANY{{name}}</span>
              <img
                class="img-profile rounded-circle"
                src="{{}}"
              />
            </a>
            <!-- Dropdown - User Information -->
            <div
              class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="userDropdown"
            >
              <a class="dropdown-item" href="#">
                <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                Settings
              </a>

              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Logout
              </a>
            </div>
          </li>
        </ul>
        <!-- Navbar-->
      </nav>
    </div>
    <!-- end of navbar -->

    <!-- message -->
    <div>
      <div class="message container">
        <h1>This is about Messages & Suggestions</h1>
        <ul>
          <!-- edit using v-for to make #of cards =#of msgs-->
          <!-- edit using v-for to make #of cards =#of msgs-->
          <li>
            <div class="card m-3 border-info" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">amany</h5>
                <h6 class="card-subtitle mb-2 text-muted">1661</h6>
                <p class="card-text">
                  {{msg}}GOOD Some quick example text to build the bulk of the card's content example
                  text to build the bulk of the card's
                  contentexample text to build the bulk of the card's
                  contentexample text to build the bulk of the card's contentexample text
                  to build the bulk of the card's content.
                </p>
                <button v-on:click="reply()" class="card-link btn btn-dark">Reply</button>
                <button v-on:click="ok()" class="card-link btn btn-dark">Ok</button>
              </div>
            </div>
          </li>

          <v-divider></v-divider>
          <li>
            <div class="card m-3 border-info" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">AMANY ..</h5>
                <h6 class="card-subtitle mb-2 text-muted">5000</h6>
                <p
                  class="card-text"
                >{{msg}}GOOD Some quick example text to build the bulk of the card's content.</p>
                <button v-on:click="reply()" class="card-link btn btn-dark">Reply</button>
                <button v-on:click="ok()" class="card-link btn btn-dark">Ok</button>
              </div>
            </div>
          </li>

          <li>
            <div class="card m-3 border-info" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">amany</h5>
                <h6 class="card-subtitle mb-2 text-muted">1661</h6>
                <p
                  class="card-text"
                >{{msg}}GOOD Some quick example text to build the bulk of the card's content.</p>
                <button v-on:click="reply()" class="card-link btn btn-dark">Reply</button>
                <button v-on:click="ok()" class="card-link btn btn-dark">Ok</button>
              </div>
            </div>
          </li>
          <li>
            <div class="card m-3 border-info" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">amany</h5>
                <h6 class="card-subtitle mb-2 text-muted">1661</h6>
                <p
                  class="card-text"
                >{{msg}}GOOD Some quick example text to build the bulk of the card's content.</p>
                <button v-on:click="reply()" class="card-link btn btn-dark">Reply</button>
                <button v-on:click="ok()" class="card-link btn btn-dark">Ok</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- footer -->
    <div class="fixed-bottom bg-primary">
      <v-card
        flat
        tile
        class="lighten-1 white--text text-center hidden-md-and-down"
        color="#164e87"
      >
        <v-card-text class="text-white pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
          Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
          accumsan id ultrices nunc. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>
        <br />
        <v-card-text class="text-light">
          {{ new Date().getFullYear() }} —
          <strong>Notify</strong>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    ok: function() {
      // send ok to client and remove it from the page
      this.$alert("i have been read it , thanks for your suggestions :)");
    },
    reply: function() {
      //reply then remove it to show the new msg
      this.$prompt("REPLY..").then(() => {
        //do something...
        console.log("*a*a*a*a*a*");
      });
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.navbar {
  min-height: 80px;
}
.navbar-nav .nav-link {
  margin-right: 20px;
  margin-left: 100px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
