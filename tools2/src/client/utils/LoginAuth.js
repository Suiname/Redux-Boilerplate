const authorization = () => {
  $.ajax({
    type: 'POST',
    dataType: 'json',
    url: '/auth/check',
    success: function(authcheck) {
      if (!authcheck) {
        browserHistory.push('/');
      }
    },
    error: function(err) {
    }
  });
}

export default authorization;
