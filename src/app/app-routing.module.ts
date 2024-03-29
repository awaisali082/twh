import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './student/registration/registration.component';
import { DashboardComponent } from './student/dashboard/dashboard.component';
import { SCourseCertificateComponent } from './student/s-course-certificate/s-course-certificate.component';
import { StudentMessageComponent } from './student/student-message/student-message.component';
import { FavoriteGroupClassComponent } from './student/favorite-group-class/favorite-group-class.component';
import { GroupClassDetailComponent } from './student/group-class-detail/group-class-detail.component'
import { FavoriteCourseMainComponent } from './student/favorite-course-main/favorite-course-main.component';
import { FavoriteTutorComponent } from './student/favorite-tutor/favorite-tutor.component';
import { MyLessonComponent } from './student/my-lesson/my-lesson.component';
import { ProfileComponent } from './student/profile/profile.component';
import { StudentEditProfileComponent } from './student/student-edit-profile/student-edit-profile.component'
import { CoursePaymentMethodComponent } from './student/course-payment-method/course-payment-method.component';
import { TransactionHistoryComponent } from './student/transaction-history/transaction-history.component';
import { TransactionPendingComponent } from './student/transaction-pending/transaction-pending.component';
import { LessonInformationComponent } from './student/lesson-information/lesson-information.component';
import { MycouresComponent } from './student/mycoures/mycoures.component';
import { CourseClickingTitleComponent } from './student/course-clicking-title/course-clicking-title.component';
import { MycourseEyeActionComponent } from './student/mycourse-eye-action/mycourse-eye-action.component';
import { RefundRequestComponent } from './student/refund-request/refund-request.component';
import { RequestdetailComponent } from './student/requestdetail/requestdetail.component';
import { FavoriteCourseDetailComponent } from './student/favorite-course-detail/favorite-course-detail.component';
import { authGuard } from './auth.guard';
import { ForgotpasswordComponent } from './student/forgotpassword/forgotpassword.component';
import { StudentSliderComponent } from './student-slider/student-slider.component';
import { TutorHeaderComponent } from './tutor/tutor-header/tutor-header.component';
import { TutorMessageComponent } from './tutor/tutor-message/tutor-message.component';
import { FavoriteTutorsDetailsTutorsideComponent } from './tutor/favorite-tutors-details-tutorside/favorite-tutors-details-tutorside.component';
import { FavoriteCourseTutorsideComponent } from './tutor/favorite-course-tutorside/favorite-course-tutorside.component';
import { TutorFavoritecourseDetailsComponent } from './tutor/tutor-favoritecourse-details/tutor-favoritecourse-details.component';
import { FavoritegroupclasstutorsideComponent } from './tutor/favoritegroupclasstutorside/favoritegroupclasstutorside.component';
import { FavoritegroupclassdetailstutorsideComponent } from './tutor/favoritegroupclassdetailstutorside/favoritegroupclassdetailstutorside.component';
import { TutorprofileComponent } from './tutor/tutorprofile/tutorprofile.component';
import { CourseTransactionComponent } from './tutor/course-transaction/course-transaction.component';
import { CourseTransactionDetailsComponent } from './tutor/course-transaction-details/course-transaction-details.component';
import { TutorTransactionsComponent } from './tutor/tutor-transactions/tutor-transactions.component';
import { TutorDashboardComponent } from './tutor/tutor-dashboard/tutor-dashboard.component';
import { TutorPaymentDetailsComponent } from './tutor/tutor-payment-details/tutor-payment-details.component';
import { Tutormylesson1on1orgroupclassComponent } from './tutor/tutormylesson1on1orgroupclass/tutormylesson1on1orgroupclass.component';
import { Tutorlesson11classdetailsComponent } from './tutor/tutorlesson11classdetails/tutorlesson11classdetails.component';
import { TutormylessongroupclassdetailComponent } from './tutor/tutormylessongroupclassdetail/tutormylessongroupclassdetail.component';
import { TutorViewListOfAppointmentsComponent } from './tutor/tutor-view-list-of-appointments/tutor-view-list-of-appointments.component';
import { TutorgroupclassComponent } from './tutor/tutorgroupclass/tutorgroupclass.component';
import { CoursepaymentmethodtutorComponent } from './tutor/coursepaymentmethodtutor/coursepaymentmethodtutor.component'
import { MycoursestutorComponent } from './tutor/mycoursestutor/mycoursestutor.component';
import { MycourseclicktitleTutorComponent } from './tutor/mycourseclicktitle-tutor/mycourseclicktitle-tutor.component';
import { MycourseclickeyeactionTutorComponent } from './tutor/mycourseclickeyeaction-tutor/mycourseclickeyeaction-tutor.component';
import { RefundrequestTutorComponent } from './tutor/refundrequest-tutor/refundrequest-tutor.component';
import { RefundrequestdetailTutorComponent } from './tutor/refundrequestdetail-tutor/refundrequestdetail-tutor.component';
import { AddnewgroupclasstutorComponent } from './tutor/addnewgroupclasstutor/addnewgroupclasstutor.component';
import { TutorpayoutRequestComponent } from './tutor/tutorpayout-request/tutorpayout-request.component';
import { PayoutRequestAddaBankAccountTutorComponent } from './tutor/payout-request-adda-bank-account-tutor/payout-request-adda-bank-account-tutor.component';
import { PayoutrequestCreateAccountComponent } from './tutor/payoutrequest-create-account/payoutrequest-create-account.component';
import { GroupclassCouponComponent } from './tutor/groupclass-coupon/groupclass-coupon.component';
import { OneOnOnegroupclasscouponComponent } from './tutor/one-on-onegroupclasscoupon/one-on-onegroupclasscoupon.component';
import { CourseManagerCouponComponent } from './tutor/course-manager-coupon/course-manager-coupon.component';
import { CourseManagerComponent } from './tutor/course-manager/course-manager.component';
import { CourseManagerCourseGoalsComponent } from './tutor/course-manager-course-goals/course-manager-course-goals.component';
import { CourseManagerLecturedetailsComponent } from './tutor/course-manager-lecturedetails/course-manager-lecturedetails.component';
import { CourseManagerEditComponent } from './tutor/course-manager-edit/course-manager-edit.component';
import { CourseCertificateComponent } from './tutor/course-certificate/course-certificate.component';
import { StudentgroupclasslessonDetailsComponent } from './student/studentgroupclasslesson-details/studentgroupclasslesson-details.component'
  ; import { AddsectionCourseManagerComponent } from './tutor/addsection-course-manager/addsection-course-manager.component';
import { AddlectureCourseManagerComponent } from './tutor/addlecture-course-manager/addlecture-course-manager.component';
import { MytopicPopupComponent } from './tutor/mytopic-popup/mytopic-popup.component';
import { EditAddsectionCoursemanagerComponent } from './tutor/edit-addsection-coursemanager/edit-addsection-coursemanager.component';
import { EditAddlectureCoursemanagerComponent } from './tutor/edit-addlecture-coursemanager/edit-addlecture-coursemanager.component';
import { TutorCategoryComponent } from './tutor/tutor-category/tutor-category.component';
import { FavoriteTutorTutorsideComponent } from './tutor/favorite-tutor-tutorside/favorite-tutor-tutorside.component';
import { EditTutorprofileComponent } from './tutor/edit-tutorprofile/edit-tutorprofile.component';
import { FavoriteTutorDetailComponent } from './student/favorite-tutor-detail/favorite-tutor-detail.component';
import { ListAppointmentComponent } from './student/list-appointment/list-appointment.component';
import { MygroupclassessComponent } from './tutor/mygroupclassess/mygroupclassess.component';
import { MycategorytopicpopupComponent } from './tutor/mycategorytopicpopup/mycategorytopicpopup.component';
import { OneOneClassScheduleComponent } from './tutor/one-one-class-schedule/one-one-class-schedule.component';
import { OneOneClassFreesessionComponent } from './tutor/one-one-class-freesession/one-one-class-freesession.component';
const routes: Routes = [
  { path: 'OneOneClassFreesession', component: OneOneClassFreesessionComponent },
  { path: 'OneOneClassSchedule', component: OneOneClassScheduleComponent },
  { path: 'Mycategorytopicpopup', component: MycategorytopicpopupComponent },
  { path: 'Mygroupclassess-tutor', component: MygroupclassessComponent },
  { path: 'favorite-Tutor', component: FavoriteTutorTutorsideComponent },
  { path: 'EditTutorprofile', component: EditTutorprofileComponent },
  { path: 'TutorCategory', component: TutorCategoryComponent },
  { path: 'EditAddlectureCoursemanager', component: EditAddlectureCoursemanagerComponent },
  { path: 'EditAddsectionCoursemanager', component: EditAddsectionCoursemanagerComponent },
  { path: 'MytopicPopup', component: MytopicPopupComponent },
  { path: 'AddlectureCourseManager', component: AddlectureCourseManagerComponent },
  { path: 'AddsectionCourseManager', component: AddsectionCourseManagerComponent },
  { path: 'tutorCourseCertificate', component: CourseCertificateComponent },
  { path: 'CourseManagerEdit', component: CourseManagerEditComponent },
  { path: 'CourseManagerLecturedetails', component: CourseManagerLecturedetailsComponent },
  { path: 'CourseManagerCourseGoals', component: CourseManagerCourseGoalsComponent },
  { path: 'CourseManager', component: CourseManagerComponent },
  { path: 'CourseManagerCoupon', component: CourseManagerCouponComponent },
  { path: 'OneOnOnegroupclasscoupon', component: OneOnOnegroupclasscouponComponent },
  { path: 'GroupclassCoupon', component: GroupclassCouponComponent },
  { path: 'PayoutrequestCreateAccount', component: PayoutrequestCreateAccountComponent },
  { path: 'PayoutRequestAddaBankAccountTutor', component: PayoutRequestAddaBankAccountTutorComponent },
  { path: 'TutorpayoutRequest', component: TutorpayoutRequestComponent },
  { path: 'Addnewgroupclasstutor', component: AddnewgroupclasstutorComponent },
  { path: 'RefundrequestdetailTutor', component: RefundrequestdetailTutorComponent },
  { path: 'RefundrequestTutor', component: RefundrequestTutorComponent },
  { path: 'MycourseclickeyeactionTutor', component: MycourseclickeyeactionTutorComponent },
  { path: 'MycourseclicktitleTutor', component: MycourseclicktitleTutorComponent },
  { path: 'Coursepaymentmethodtutor', component: CoursepaymentmethodtutorComponent },
  { path: 'Mycoursestutor', component: MycoursestutorComponent },
  { path: 'Tutorgroupclass', component: TutorgroupclassComponent },
  { path: 'TutorViewListOfAppointments', component: TutorViewListOfAppointmentsComponent },
  { path: 'Tutormylessongroupclassdetail', component: TutormylessongroupclassdetailComponent },
  { path: 'Tutormylesson11detail', component: Tutorlesson11classdetailsComponent },
  { path: 'Tutormylesson', component: Tutormylesson1on1orgroupclassComponent },
  { path: 'TutorPaymentDetails', component: TutorPaymentDetailsComponent },
  { path: 'TutorDashboard', component: TutorDashboardComponent },
  { path: 'TutorTransactions', component: TutorTransactionsComponent },
  { path: 'tutorCourseTransactiondetail', component: CourseTransactionDetailsComponent },
  { path: 'tutorCourseTransaction', component: CourseTransactionComponent },
  { path: 'Tutorprofile', component: TutorprofileComponent },
  { path: 'tutorfavorite-goupclassdetails', component: FavoritegroupclassdetailstutorsideComponent },
  { path: 'tutorfavorite-goupclass', component: FavoritegroupclasstutorsideComponent },
  { path: 'favoritecoursetutorside', component: FavoriteCourseTutorsideComponent },
  { path: 'TutorFavoritecourseDetails', component: TutorFavoritecourseDetailsComponent },
  { path: 'tutor-favorite-details', component: FavoriteTutorsDetailsTutorsideComponent },
  { path: 'tutor-header', component: TutorHeaderComponent },
  { path: 'tutor-message', component: TutorMessageComponent },
  { path: 'requestdetail', component: RequestdetailComponent },
  { path: 'registration', component: RegistrationComponent, },
  { path: 'mycourseclicktitle', component: CourseClickingTitleComponent },
  { path: 'Coursesye', component: MycourseEyeActionComponent },
  { path: 'transactionpending', component: TransactionPendingComponent },
  { path: 'mycourse', component: MycouresComponent },
  { path: 'transaction-history', component: TransactionHistoryComponent },

  { path: 'StudentgroupclasslessonDetails', component: StudentgroupclasslessonDetailsComponent },
  { path: 'lesson-info', component: LessonInformationComponent },
  { path: 'coursepaymentmethod', component: CoursePaymentMethodComponent },
  { path: '', component: LoginComponent, },
  { path: 'forgotpassword', component: ForgotpasswordComponent, },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'chatmessage', component: StudentMessageComponent },
  { path: 'StudentListAppointment', component: ListAppointmentComponent },
  { path: 'studentFavoriteCourseDetail', component: FavoriteCourseDetailComponent },
  { path: 'StudentGroupClassDetail', component: GroupClassDetailComponent },
  { path: 'favoritegroupclass', component: FavoriteGroupClassComponent },
  { path: 'favoritecoursemain', component: FavoriteCourseMainComponent },
  { path: 'FavoriteTutorDetail', component: FavoriteTutorDetailComponent },
  { path: 'favoritetutor', component: FavoriteTutorComponent },
  { path: 'mylesson', component: MyLessonComponent },
  { path: 'refundrequest', component: RefundRequestComponent },
  { path: 'Student-certificate', component: SCourseCertificateComponent },
  { path: 'editstudentprofile', component: StudentEditProfileComponent },
  { path: 'myprofile', component: ProfileComponent },
  { path: 'studentheaderslider', component: StudentSliderComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
