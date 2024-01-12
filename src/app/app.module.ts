import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './student/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsdPkPipe } from './pipes/usd-pk.pipe';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegistrationComponent } from './student/registration/registration.component';
import { DashboardComponent } from './student/dashboard/dashboard.component';
import { StudentMessageComponent } from './student/student-message/student-message.component';
import { ProfileComponent } from './student/profile/profile.component'
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { RichTextEditorModule, ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';
import { FavoriteTutorComponent } from './student/favorite-tutor/favorite-tutor.component';
import { FavoriteGroupClassComponent } from './student/favorite-group-class/favorite-group-class.component';
import { FavoriteCourseMainComponent } from './student/favorite-course-main/favorite-course-main.component';
import { FavoriteTutorDetailComponent } from './student/favorite-tutor-detail/favorite-tutor-detail.component';
import { GroupClassDetailComponent } from './student/group-class-detail/group-class-detail.component';
import { FavoriteCourseDetailComponent } from './student/favorite-course-detail/favorite-course-detail.component';
import { MyLessonComponent } from './student/my-lesson/my-lesson.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LessonInformationComponent } from './student/lesson-information/lesson-information.component';
import { ListAppointmentComponent } from './student/list-appointment/list-appointment.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CoursePaymentMethodComponent } from './student/course-payment-method/course-payment-method.component';
import { TransactionHistoryComponent } from './student/transaction-history/transaction-history.component';
import { TransactionPendingComponent } from './student/transaction-pending/transaction-pending.component';
import { MycouresComponent } from './student/mycoures/mycoures.component';
import { CourseClickingTitleComponent } from './student/course-clicking-title/course-clicking-title.component';
import { MycourseEyeActionComponent } from './student/mycourse-eye-action/mycourse-eye-action.component';
import { RefundRequestComponent } from './student/refund-request/refund-request.component';
import { RequestdetailComponent } from './student/requestdetail/requestdetail.component';
import { StudentSliderComponent } from './student-slider/student-slider.component';
import { ForgotpasswordComponent } from './student/forgotpassword/forgotpassword.component';
import { TutorDashboardComponent } from './tutor/tutor-dashboard/tutor-dashboard.component';
import { TutorHeaderComponent } from './tutor/tutor-header/tutor-header.component';
import { TutorMessageComponent } from './tutor/tutor-message/tutor-message.component';
import { FavoriteTutorsDetailsTutorsideComponent } from './tutor/favorite-tutors-details-tutorside/favorite-tutors-details-tutorside.component';
import { FavoriteTutorTutorsideComponent } from './tutor/favorite-tutor-tutorside/favorite-tutor-tutorside.component';
import { FavoriteCourseTutorsideComponent } from './tutor/favorite-course-tutorside/favorite-course-tutorside.component';
import { FavoritegroupclasstutorsideComponent } from './tutor/favoritegroupclasstutorside/favoritegroupclasstutorside.component';
import { FavoritegroupclassdetailstutorsideComponent } from './tutor/favoritegroupclassdetailstutorside/favoritegroupclassdetailstutorside.component';
import { TutorprofileComponent } from './tutor/tutorprofile/tutorprofile.component';
import { CourseTransactionComponent } from './tutor/course-transaction/course-transaction.component';
import { CourseTransactionDetailsComponent } from './tutor/course-transaction-details/course-transaction-details.component';
import { TutorTransactionsComponent } from './tutor/tutor-transactions/tutor-transactions.component';
import { TutorPaymentDetailsComponent } from './tutor/tutor-payment-details/tutor-payment-details.component';
import { Tutormylesson1on1orgroupclassComponent } from './tutor/tutormylesson1on1orgroupclass/tutormylesson1on1orgroupclass.component';
import { Tutorlesson11classdetailsComponent } from './tutor/tutorlesson11classdetails/tutorlesson11classdetails.component';
import { TutormylessongroupclassdetailComponent } from './tutor/tutormylessongroupclassdetail/tutormylessongroupclassdetail.component';
import { TutorViewListOfAppointmentsComponent } from './tutor/tutor-view-list-of-appointments/tutor-view-list-of-appointments.component';
import { TutorgroupclassComponent } from './tutor/tutorgroupclass/tutorgroupclass.component';
import { AddnewgroupclasstutorComponent } from './tutor/addnewgroupclasstutor/addnewgroupclasstutor.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MycoursestutorComponent } from './tutor/mycoursestutor/mycoursestutor.component';
import { CoursepaymentmethodtutorComponent } from './tutor/coursepaymentmethodtutor/coursepaymentmethodtutor.component';
import { MycourseclicktitleTutorComponent } from './tutor/mycourseclicktitle-tutor/mycourseclicktitle-tutor.component';
import { MycourseclickeyeactionTutorComponent } from './tutor/mycourseclickeyeaction-tutor/mycourseclickeyeaction-tutor.component';
import { RefundrequestTutorComponent } from './tutor/refundrequest-tutor/refundrequest-tutor.component';
import { RefundrequestdetailTutorComponent } from './tutor/refundrequestdetail-tutor/refundrequestdetail-tutor.component';
import { FileUploadModule } from 'ng2-file-upload';
import { TutorpayoutRequestComponent } from './tutor/tutorpayout-request/tutorpayout-request.component';
import { PayoutRequestAddaBankAccountTutorComponent } from './tutor/payout-request-adda-bank-account-tutor/payout-request-adda-bank-account-tutor.component';
import { PayoutrequestCreateAccountComponent } from './tutor/payoutrequest-create-account/payoutrequest-create-account.component';
import { GroupclassCouponComponent } from './tutor/groupclass-coupon/groupclass-coupon.component';

import { OneOnOnegroupclasscouponComponent } from './tutor/one-on-onegroupclasscoupon/one-on-onegroupclasscoupon.component';
import { CourseManagerCouponComponent } from './tutor/course-manager-coupon/course-manager-coupon.component';
import { CourseManagerComponent } from './tutor/course-manager/course-manager.component';
import { CourseManagerEditComponent } from './tutor/course-manager-edit/course-manager-edit.component';
import { CourseManagerCourseGoalsComponent } from './tutor/course-manager-course-goals/course-manager-course-goals.component';
import { CourseManagerLecturedetailsComponent } from './tutor/course-manager-lecturedetails/course-manager-lecturedetails.component';
import { TutorFavoritecourseDetailsComponent } from './tutor/tutor-favoritecourse-details/tutor-favoritecourse-details.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AddsectionCourseManagerComponent } from './tutor/addsection-course-manager/addsection-course-manager.component';
import { AddlectureCourseManagerComponent } from './tutor/addlecture-course-manager/addlecture-course-manager.component';
import { MytopicPopupComponent } from './tutor/mytopic-popup/mytopic-popup.component';
import { EditAddsectionCoursemanagerComponent } from './tutor/edit-addsection-coursemanager/edit-addsection-coursemanager.component';
import { EditAddlectureCoursemanagerComponent } from './tutor/edit-addlecture-coursemanager/edit-addlecture-coursemanager.component';
import { TutorCategoryComponent } from './tutor/tutor-category/tutor-category.component';
import { EditTutorprofileComponent } from './tutor/edit-tutorprofile/edit-tutorprofile.component';
import { StudentEditProfileComponent } from './student/student-edit-profile/student-edit-profile.component';
import { SCourseCertificateComponent } from './student/s-course-certificate/s-course-certificate.component';
import { StudentgroupclasslessonDetailsComponent } from './student/studentgroupclasslesson-details/studentgroupclasslesson-details.component';
import { MygroupclassessComponent } from './tutor/mygroupclassess/mygroupclassess.component';
import { MycategorytopicpopupComponent } from './tutor/mycategorytopicpopup/mycategorytopicpopup.component';
import { OneOneClassScheduleComponent } from './tutor/one-one-class-schedule/one-one-class-schedule.component';
import { OneOneClassFreesessionComponent } from './tutor/one-one-class-freesession/one-one-class-freesession.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    UsdPkPipe,
    RegistrationComponent,
    DashboardComponent,
    StudentMessageComponent,
    ProfileComponent,
    FavoriteTutorComponent,
    FavoriteGroupClassComponent,
    FavoriteCourseMainComponent,
    FavoriteTutorDetailComponent,
    GroupClassDetailComponent,
    FavoriteCourseDetailComponent,
    MyLessonComponent,
    LessonInformationComponent,
    ListAppointmentComponent,
    CoursePaymentMethodComponent,
    TransactionHistoryComponent,
    TransactionPendingComponent,
    MycouresComponent,
    CourseClickingTitleComponent,
    MycourseEyeActionComponent,
    RefundRequestComponent,
    RequestdetailComponent,
    StudentSliderComponent,
    ForgotpasswordComponent,
    TutorDashboardComponent,
    TutorHeaderComponent,
    TutorMessageComponent,
    FavoriteTutorsDetailsTutorsideComponent,
    FavoriteTutorTutorsideComponent,
    FavoriteCourseTutorsideComponent,
    FavoritegroupclasstutorsideComponent,
    FavoritegroupclassdetailstutorsideComponent,
    TutorprofileComponent,
    CourseTransactionComponent,
    CourseTransactionDetailsComponent,
    TutorTransactionsComponent,
    TutorPaymentDetailsComponent,
    Tutormylesson1on1orgroupclassComponent,
    Tutorlesson11classdetailsComponent,
    TutormylessongroupclassdetailComponent,
    TutorViewListOfAppointmentsComponent,
    TutorgroupclassComponent,
    AddnewgroupclasstutorComponent,
    MycoursestutorComponent,
    CoursepaymentmethodtutorComponent,
    MycourseclicktitleTutorComponent,
    MycourseclickeyeactionTutorComponent,
    RefundrequestTutorComponent,
    RefundrequestdetailTutorComponent,
    TutorpayoutRequestComponent,
    PayoutRequestAddaBankAccountTutorComponent,
    PayoutrequestCreateAccountComponent,
    GroupclassCouponComponent,
    OneOnOnegroupclasscouponComponent,
    CourseManagerCouponComponent,
    CourseManagerComponent,
    CourseManagerEditComponent,
    CourseManagerCourseGoalsComponent,
    CourseManagerLecturedetailsComponent,
    TutorFavoritecourseDetailsComponent,
    AddsectionCourseManagerComponent,
    AddlectureCourseManagerComponent,
    MytopicPopupComponent,
    EditAddsectionCoursemanagerComponent,
    EditAddlectureCoursemanagerComponent,
    TutorCategoryComponent,
    EditTutorprofileComponent,
    StudentEditProfileComponent,
    SCourseCertificateComponent,
    StudentgroupclasslessonDetailsComponent,
    MygroupclassessComponent,
    MycategorytopicpopupComponent,
    OneOneClassScheduleComponent,
    OneOneClassFreesessionComponent,


  ],
  imports: [

    AngularEditorModule,
    FileUploadModule,
    FullCalendarModule,
    HttpClientModule,
    NgxPaginationModule,
    MatSelectModule,
    MatFormFieldModule,
    RichTextEditorModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    FontAwesomeModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatRadioModule,


  ],


  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
