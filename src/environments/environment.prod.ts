export const environment = {
  production: true,
  ccda_validation_url: 'https://ttpds.sitenv.org:8443/referenceccdaservice/',
  trustanchor_upload_url: 'https://prodccda.sitenv.org/trustanchoruploader/uploadtrustanchor',
  trustbundle_download_url: 'https://prodccda.sitenv.org/trustanchoruploader/downloadtrustbundle',
  direct_send_precanned_message_url: 'https://prodccda.sitenv.org/directtransportmessagesender/sendmessagewithattachmentfilepath',
  direct_send_uploaded_message_url: 'https://prodccda.sitenv.org/directtransportmessagesender/sendmessagewithattachmentfile',
  xdr_send_precanned_message_url: 'https://prodccda.sitenv.org/xdrmessagesender/sendmessagewithattachmentfilepath',
  xdr_send_uploaded_message_url: 'https://prodccda.sitenv.org/xdrmessagesender/sendmessagewithattachmentfile',
  canned_ccda_filepaths_url: 'https://prodccda.sitenv.org/directtransportmessagesender/listsampleccdafiles',
  scorecard_url: 'https://sitenv.org/scorecard/',
  fhir_url: 'https://sitenv.org/web/site/fhir-sandbox',
  search_message_logs_by_from_address_url: 'https://prodccda.sitenv.org/xdrmessagevalidator/messagelogs/getlogsbyfromaddress?fromAddress=',
  search_message_logs_by_ip_address_url: 'https://prodccda.sitenv.org/xdrmessagevalidator/messagelogs/getlogsbyipaddress?ipAddress=',
  site_xdr_wsdl_url: 'https://prodccda.sitenv.org/xdrmessagevalidator/Dispatcher/XDRService.wsdl'
};
