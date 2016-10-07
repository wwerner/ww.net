package net.wolfgangwerner.site.infrastructure.presentation.http;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/api")
public class ApiController {

	@RequestMapping(value = "hello", method = RequestMethod.GET, produces = MediaType.TEXT_PLAIN_VALUE)
	// @StatusCodes({ @ResponseCode(code = 200, condition = "All is well.") })
	public ResponseEntity<String> sayHello(@RequestParam("name") String name) {

		return ResponseEntity.ok("Hallo " + name);
	}

}
