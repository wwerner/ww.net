package net.wolfgangwerner.site.infrastructure.presentation.http;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RootController {

	@RequestMapping("/ping")
	public String ping(Model model) {
		model.addAttribute("pong", "PONG");
		return "example/ping";
	}

}
