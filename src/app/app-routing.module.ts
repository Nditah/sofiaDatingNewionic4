import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  //{ path: 'welcome', loadChildren: './welcome/welcome/welcome.module#WelcomePageModule' },
  { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomePageModule' },
  { path: 'verify', loadChildren: './verify/verify.module#VerifyPageModule' },
  { path: 'terms', loadChildren: './terms/terms.module#TermsPageModule' },
  { path: 'user-detail', loadChildren: './user-detail/user-detail.module#UserDetailPageModule' },
  { path: 'swipe', loadChildren: './swipe/swipe.module#SwipePageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  //{ path: 'ssttings', loadChildren: './ssttings/ssttings.module#SsttingsPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: 'requested-contacts', loadChildren: './requested-contacts/requested-contacts.module#RequestedContactsPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'password', loadChildren: './password/password.module#PasswordPageModule' },
  { path: 'offline', loadChildren: './offline/offline.module#OfflinePageModule' },
  { path: 'match', loadChildren: './match/match.module#MatchPageModule' },
  { path: 'main-tabs', loadChildren: './main-tabs/main-tabs.module#MainTabsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'kontakt', loadChildren: './kontakt/kontakt.module#KontaktPageModule' },
  { path: 'intro', loadChildren: './intro/intro.module#IntroPageModule' },
  { path: 'inbox', loadChildren: './inbox/inbox.module#InboxPageModule' },
  { path: 'impressum', loadChildren: './impressum/impressum.module#ImpressumPageModule' },
  { path: 'howto', loadChildren: './howto/howto.module#HowtoPageModule' },
  { path: 'filter', loadChildren: './filter/filter.module#FilterPageModule' },
  { path: 'de-appearance', loadChildren: './de-appearance/de-appearance.module#DeAppearancePageModule' },
  { path: 'datenschutz', loadChildren: './datenschutz/datenschutz.module#DatenschutzPageModule' },
  { path: 'corp-image', loadChildren: './corp-image/corp-image.module#CorpImagePageModule' },
  { path: 'contacts', loadChildren: './contacts/contacts.module#ContactsPageModule' },
  { path: 'contact-us', loadChildren: './contact-us/contact-us.module#ContactUsPageModule' },
  { path: 'city-suggestion', loadChildren: './city-suggestion/city-suggestion.module#CitySuggestionPageModule' },
  { path: 'city-model', loadChildren: './city-model/city-model.module#CityModelPageModule' },
  { path: 'chat-detail', loadChildren: './chat-detail/chat-detail.module#ChatDetailPageModule' },
  { path: 'change-password', loadChildren: './change-password/change-password.module#ChangePasswordPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
